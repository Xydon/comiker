import { RectConfig } from "konva/lib/shapes/Rect";
import React from "react";
import { Rect, Transformer } from "react-konva";

const Rectangle: React.FC<{
	shapeProps: RectConfig;
	isSelected: boolean;
	onSelect: (attr: RectConfig) => void;
	onChange: (arrt: RectConfig) => void;
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
			<Rect
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

export default Rectangle;
