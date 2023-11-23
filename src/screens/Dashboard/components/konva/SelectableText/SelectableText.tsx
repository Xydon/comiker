import { TextConfig } from "konva/lib/shapes/Text";
import React from "react";
import { Rect, Text, Transformer } from "react-konva";

const SelectableText: React.FC<{
	shapeProps: TextConfig;
	isSelected: boolean;
	onSelect: (attr: TextConfig) => void;
	onChange: (arrt: TextConfig) => void;
	onDelete: (id?: string) => void;
}> = ({ shapeProps, isSelected, onSelect, onChange, onDelete }) => {
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

	return (
		<React.Fragment>
			<Text
				onClick={onSelect}
				onTap={onSelect}
				ref={shapeRef}
				{...shapeProps}
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
          keepRatio={true}
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

export default SelectableText;
