import { ImageConfig } from "konva/lib/shapes/Image";
import React, { useEffect, useRef, useState } from "react";
import { Rect, Transformer, Image } from "react-konva";
import useImage from "use-image";

const CImage: React.FC<{
	shapeProps: ImageConfig;
	isSelected: boolean;
	onSelect: () => void;
	onChange: (arrt: ImageConfig) => void;
	onDelete: (id?: string) => void;
	src: string;
}> = ({ shapeProps, isSelected, onSelect, onChange, onDelete, src }) => {
	const shapeRef = React.useRef<any>();
	const trRef = React.useRef<any>();

	React.useEffect(() => {
		if (isSelected) {
			trRef.current.nodes([shapeRef.current]);
			trRef.current.getLayer().batchDraw();
		}
	}, [isSelected]);

	React.useEffect(() => {
		if (isSelected) {
			const deleteHandler = (e: KeyboardEvent) => {
				if (e.key === "Delete") {
					onDelete(shapeProps.id);
				}
			};

			document.addEventListener("keydown", deleteHandler);

			return () => {
				document.removeEventListener("keydown", deleteHandler);
			};
		}
	}, [isSelected]);

	const [img] = useImage(src);
	const [layout, setLayout] = useState<any>({
		width: 0,
		height: 0,
	});
	const maxWidth = shapeProps.width ? shapeProps.width : 100;

	useEffect(() => {
		const imageObj = new window.Image();
		imageObj.src = src;

		imageObj.onload = () => {
			const aspectRatio = imageObj.width / imageObj.height;
			const newWidth = Math.min(maxWidth, imageObj.width);
			const newHeight = newWidth / aspectRatio;

			setLayout({ width: newWidth, height: newHeight });
		};
	}, [src, maxWidth]);

	const config = {
		...shapeProps,
		image: img,
		height: layout.height,
		width: layout.width,
	};

	return (
		<React.Fragment>
			<Image
				onClick={onSelect}
				onTap={onSelect}
				ref={shapeRef}
				{...config}
				draggable
				onDragEnd={(e) => {
					onChange({
						...shapeProps,
						x: e.target.x(),
						y: e.target.y(),
					});
				}}
				onTransformEnd={(e) => {
					const node = shapeRef.current;
					const scaleX = node.scaleX();
					const scaleY = node.scaleY();

					node.scaleX(1);
					node.scaleY(1);
					onChange({
						...shapeProps,
						x: node.x(),
						y: node.y(),
						width: Math.max(5, node.width() * scaleX),
						height: Math.max(node.height() * scaleY),
					});
				}}
			/>
			{isSelected && (
				<Transformer
					ref={trRef}
					flipEnabled={false}
					boundBoxFunc={(oldBox, newBox) => {
						// limit resize
						if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
							return oldBox;
						}
						return newBox;
					}}
				/>
			)}
		</React.Fragment>
	);
};

export default CImage;
