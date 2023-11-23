// import { KonvaEventObject } from "konva/lib/Node";
// import { CircleConfig } from "konva/lib/shapes/Circle";
// import { LineConfig } from "konva/lib/shapes/Line";
// import { RectConfig } from "konva/lib/shapes/Rect";
// import { TextConfig } from "konva/lib/shapes/Text";
// import React, { useState } from "react";
// import { Text, Circle, Line, Rect, Stage, Layer } from "react-konva";

// interface State {
// 	circles: TextConfig[];
// 	rectangles: RectConfig[];
// 	lines: LineConfig[];
// }

// function Dashboard() {
// 	const [circles, setCircles] = useState<CircleConfig[]>([
// 		{
// 			id: "1",
// 			x: 500,
// 			y: 200,
// 			radius: 50,
// 			fill: "green",
// 			draggable: true,
// 		},
// 		{
// 			id: "2",
// 			x: 100,
// 			y: 250,
// 			radius: 50,
// 			fill: "red",
// 			draggable: true,
// 		},
// 	]);

// 	const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
// 		const id = e.target.id();
// 		setCircles(
// 			circles.map((star) => {
// 				return {
// 					...star,
// 					isDragging: star.id === id,
// 				};
// 			})
// 		);
// 	};
// 	const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
// 		setCircles(
// 			circles.map((star) => {
// 				return {
// 					...star,
// 					isDragging: false,
// 				};
// 			})
// 		);
// 	};

// 	return (
// 		<>
// 			<Stage width={window.innerWidth * 0.7} height={window.innerHeight * 0.7}>
// 				<Layer>
// 					{circles.map((v) => (
// 						<Circle
// 							onDragStart={handleDragStart}
// 							onDragEnd={handleDragEnd}
// 							{...v}
// 						/>
// 					))}
// 				</Layer>
// 			</Stage>
// 		</>
// 	);
// }

// export default Dashboard;




// import DashboardNav from "@src/components/DashboardNav/DashboardNav";
// import React, { useEffect, useRef, useState } from "react";
// import Toggle, { Tabs } from "./components/Toggle/Toggle";
// import DashboardActions from "./action/DashboardActions";
// import { Circle, Layer, Stage } from "react-konva";
// import useWidth from "@src/modules/hooks/useWidth";
// import useHeight from "@src/modules/hooks/useHeight";
// import { CircleConfig } from "konva/lib/shapes/Circle";
// import { KonvaEventObject } from "konva/lib/Node";

// function Dashboard() {
// 	const [state, setState] = useState<Dashboard.State>({
// 		tabs: "panel",
// 		loading: {},
// 	});

// 	const actions = new DashboardActions(state, setState);

// 	const [circle, setCircles] = useState<CircleConfig[]>([]);

// 	const widthHandle = useWidth({});
// 	const sidebarWidthHandle = useWidth();
// 	const heightHandle = useHeight();

// 	// const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
// 	// 	setCircles((v) => {
// 	// 		let newArr = [...v];

// 	// 		newArr = newArr.map((v) => {
// 	// 			v.id;
// 	// 			return v;
// 	// 		});

// 	// 		return newArr;
// 	// 	});
// 	// };

// 	const handleEnd = (e: KonvaEventObject<DragEvent>) => {};

// 	return (
// 		<Stage width={window.innerWidth} height={window.innerHeight}>
// 			<div className="bg-darkGray min-h-screen min-w-full w-full">
// 				<div ref={heightHandle.ref}>
// 					<DashboardNav />
// 				</div>
// 				<div
// 					className="flex px-[80px] pb-10"
// 					style={{ height: `calc(100vh - ${heightHandle.height}px)` }}
// 				>
// 					<div className="basis-3/12 pr-4 static" ref={sidebarWidthHandle.ref}>
// 						<Toggle
// 							setTab={function (tab: Tabs): void {
// 								actions.setTab(tab);
// 							}}
// 							currentTab={state.tabs}
// 						/>

// 						<Layer>
// 							<Circle x={40} y={60} radius={80} fill="red"></Circle>
// 							<Circle
// 								x={40}
// 								y={60}
// 								radius={80}
// 								fill="red"
// 								draggable
// 								onDragStart={(e) => {}}
// 							></Circle>
// 						</Layer>
// 					</div>
// 					<div
// 						className="basis-6/12 px-4 overflow-auto h-full"
// 						ref={widthHandle.ref}
// 					>
// 						<Layer>
// 							{circle.map((v) => (
// 								<Circle {...v} />
// 							))}
// 						</Layer>
// 					</div>
// 					<div className="basis-3/12 pl-4 static">
// 						<p className="text-md text-white mb-3">
// 							Description for current panel
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</Stage>
// 	);
// }

// export default Dashboard;

export {}