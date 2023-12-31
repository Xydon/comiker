import { KonvaEventObject } from "konva/lib/Node";
import { RectConfig } from "konva/lib/shapes/Rect";
import React from "react";
import { Rect, Transformer } from "react-konva";

const Rectangle: React.FC<{
	shapeProps: RectConfig;
	isSelected: boolean;
	onSelect: (attr: KonvaEventObject<MouseEvent>) => void;
	onChange: (arrt: RectConfig) => void;
  onDelete: (id?: string) => void;
}> = ({ shapeProps, isSelected, onSelect, onChange, onDelete }) => {
	const shapeRef = React.useRef<any>();
	const trRef = React.useRef<any>();

	React.useEffect(() => {
		if (isSelected) {
			// we need to attach transformer manually
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
					// transformer is changing scale of the node
					// and NOT its width or height
					// but in the store we have only width and height
					// to match the data better we will reset scale on transform end
					const node = shapeRef.current;
					const scaleX = node.scaleX();
					const scaleY = node.scaleY();

					// we will reset it back
					node.scaleX(1);
					node.scaleY(1);
					onChange({
						...shapeProps,
						x: node.x(),
						y: node.y(),
						// set minimal value
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
