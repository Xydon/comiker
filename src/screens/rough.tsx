import { KonvaEventObject } from "konva/lib/Node";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { LineConfig } from "konva/lib/shapes/Line";
import { RectConfig } from "konva/lib/shapes/Rect";
import { TextConfig } from "konva/lib/shapes/Text";
import React, { useState } from "react";
import { Text, Circle, Line, Rect, Stage, Layer } from "react-konva";

interface State {
	circles: TextConfig[];
	rectangles: RectConfig[];
	lines: LineConfig[];
}

function Dashboard() {
	const [circles, setCircles] = useState<CircleConfig[]>([
		{
			id: "1",
			x: 500,
			y: 200,
			radius: 50,
			fill: "green",
			draggable: true,
		},
		{
			id: "2",
			x: 100,
			y: 250,
			radius: 50,
			fill: "red",
			draggable: true,
		},
	]);

	const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
		const id = e.target.id();
		setCircles(
			circles.map((star) => {
				return {
					...star,
					isDragging: star.id === id,
				};
			})
		);
	};
	const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
		setCircles(
			circles.map((star) => {
				return {
					...star,
					isDragging: false,
				};
			})
		);
	};

	return (
		<>
			<Stage width={window.innerWidth * 0.7} height={window.innerHeight * 0.7}>
				<Layer>
					{circles.map((v) => (
						<Circle
							onDragStart={handleDragStart}
							onDragEnd={handleDragEnd}
							{...v}
						/>
					))}
				</Layer>
			</Stage>
		</>
	);
}

export default Dashboard;
