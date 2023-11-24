import React, { useEffect, useRef } from "react";
import { Group, Layer, Stage, StageProps } from "react-konva";
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
import { PDFDocument } from "pdf-lib";

function Artboard(props: StageProps) {
	const {
		state: { ellipse, rectangle, text, selected, image },
		actions,
	} = useApplicationContext();

	const stageRef = useRef<any>(null);

	const downloadAsFile = (dataURL: string, fileName: string) => {
		const anchor = document.createElement("a");
		anchor.href = dataURL;
		anchor.download = fileName;
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	};

	const exportToPng = () => {
		if (stageRef.current) {
			const dataURL = stageRef.current.toDataURL({ mimeType: "image/png" });
			downloadAsFile(dataURL, "exported-image.png");
		}
	};

	const downloadAsFile2 = async (pdfBytes: Uint8Array, fileName: string) => {
		const blob = new Blob([pdfBytes], { type: "application/pdf" });
		const link = document.createElement("a");
		link.href = window.URL.createObjectURL(blob);
		link.download = fileName;
		link.click();
	};

	const exportToPdf = async () => {
		if (stageRef.current) {
			const { width, height } = stageRef.current.attrs;
			const dataURL = stageRef.current.toDataURL({ mimeType: "image/png" });

			const pdfDoc = await PDFDocument.create();
			const page = pdfDoc.addPage([width, height]);

			// Convert dataURL to Uint8Array
			const blob = await fetch(dataURL).then((res) => res.blob());
			const buffer = await new Response(blob).arrayBuffer();
			const imageBytes = new Uint8Array(buffer);

			const image = await pdfDoc.embedPng(imageBytes);

			const { width: imgWidth, height: imgHeight } = image.scale(1);

			page.drawImage(image, {
				x: 0,
				y: height - imgHeight, // adjust this if needed
				width: imgWidth,
				height: imgHeight,
			});

			const pdfBytes = await pdfDoc.save();
			downloadAsFile2(pdfBytes, "exported-document.pdf");
		}
	};
	useEffect(() => {
		actions.setFunctions({
			downloadAsPdf: () => {
				exportToPdf();
			},
			downloadAsPng: () => {
				exportToPng();
			},
		});
	}, [stageRef.current]);

	return (
		<Stage
			ref={stageRef}
			{...props}
			onMouseDown={(e) => actions.setSelectionBlur(e)}
			onTouchStart={(e) => actions.setSelectionBlur(e)}
		>
			<Layer>
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
			</Layer>
		</Stage>
	);
}

export default Artboard;
