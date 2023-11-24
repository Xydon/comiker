import React from "react";
import { Layer, Stage, StageProps } from "react-konva";
import { useApplicationContext } from "../../Editor";
import Circ from "@src/screens/Dashboard/components/konva/ResizeableCircle/ResizeableCircle";
import { KonvaEventObject } from "konva/lib/Node";
import { RectConfig } from "konva/lib/shapes/Rect";
import Rectangle from "@src/screens/Dashboard/components/konva/ResizeableRect/ResizeableRect";
import SelectableText from "@src/screens/Dashboard/components/konva/SelectableText/SelectableText";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { TextConfig } from "konva/lib/shapes/Text";
import CImage from "@src/screens/Dashboard/components/konva/ResizeableImage/ResizeableImage";
import { ImageIndex } from "@src/assets/assetIndex";
import { ImageConfig } from "konva/lib/shapes/Image";

function Artboard(props: StageProps) {
	const {
		state: { ellipse, rectangle, text, selected, image },
		actions,
	} = useApplicationContext();

	return (
		<Stage
			{...props}
			onMouseDown={(e) => actions.setSelectionBlur(e)}
			onTouchStart={(e) => actions.setSelectionBlur(e)}
		>
			<Layer>
				{Object.entries(ellipse).map((v) => {
					return (
						<Circ
							shapeProps={v[1]}
							isSelected={selected ? selected.id === v[0] : false}
							onSelect={function (e: KonvaEventObject<MouseEvent>): void {
								actions.setSelection({
									id: v[0],
									shape: "ellipse",
								});
							}}
							onChange={function (arrt: EllipseConfig): void {
								actions.transformEllipse(v[0], arrt);
							}}
						/>
					);
				})}
				{Object.entries(rectangle).map((v) => {
					return (
						<Rectangle
							shapeProps={v[1]}
							isSelected={selected ? selected.id === v[0] : false}
							onSelect={function (e: KonvaEventObject<MouseEvent>): void {
								actions.setSelection({
									id: v[0],
									shape: "rectangle",
								});
							}}
							onChange={function (arrt: RectConfig): void {
								actions.transformRect(v[0], arrt);
							}}
							onDelete={function (id?: string | undefined): void {}}
						/>
					);
				})}
				{Object.entries(text).map((v) => {
					return (
						<SelectableText
							shapeProps={v[1]}
							isSelected={selected ? selected.id === v[0] : false}
							onSelect={function (): void {
								actions.setSelection({
									id: v[0],
									shape: "text",
								});
							}}
							onChange={function (arrt: TextConfig): void {
								actions.transformText(v[0], arrt);
							}}
							onDelete={function (id?: string | undefined): void {}}
						/>
					);
				})}
				{Object.entries(image).map((v) => {
					console.log(v);
					return (
						<CImage
							shapeProps={v[1]}
							isSelected={selected ? selected.id === v[0] : false}
							onSelect={function (): void {
								actions.setSelection({
									id: v[0],
									shape: "image",
								});
							}}
							onChange={function (arrt: ImageConfig): void {
								actions.transformImage(v[0], arrt);
							}}
							onDelete={function (id?: string | undefined): void {}}
							src={v[1].src}
						/>
					);
				})}
			</Layer>
		</Stage>
	);
}

export default Artboard;
