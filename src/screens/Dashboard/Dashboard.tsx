import DashboardNav from "@src/components/DashboardNav/DashboardNav";
import React, { useEffect, useRef, useState } from "react";
import Toggle, { Tabs } from "./components/Toggle/Toggle";
import DashboardActions from "./action/DashboardActions";
import { Text, Layer, Stage } from "react-konva";
import useWidth from "@src/modules/hooks/useWidth";
import useHeight from "@src/modules/hooks/useHeight";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { KonvaEventObject } from "konva/lib/Node";
import { DashboardTypes } from "./types";
import ResizableCircle from "./components/konva/ResizeableCircle/ResizeableCircle";
import ResizeableRect from "./components/konva/ResizeableRect/ResizeableRect";
import Rectangle from "./components/konva/ResizeableRect/ResizeableRect";
import Circ from "./components/konva/ResizeableCircle/ResizeableCircle";
import SelectableText from "./components/konva/SelectableText/SelectableText";

function Dashboard() {
	const [state, setState] = useState<DashboardTypes.State>({
		tabs: "panel",
		stage: {
			circle: [],
			rectangle: [
				{
					id: Math.random().toString(),
					x: 200,
					y: 80,
					width: 20,
					height: 20,
					fill: "black",
				},
			],
			selectedId: null,
		},
		loading: {},
	});

	const actions = new DashboardActions(state, setState);

	const widthHandle = useWidth({});
	const sidebarWidthHandle = useWidth();
	const heightHandle = useHeight();

	const checkDeselect = (
		e: KonvaEventObject<MouseEvent> | KonvaEventObject<TouchEvent>
	) => {
		// deselect when clicked on empty area
		const clickedOnEmpty = e.target === e.target.getStage();
		if (clickedOnEmpty) {
			actions.setShapeAsSelectd(null);
		}
	};

	return (
		<div className="bg-darkGray min-h-screen min-w-full w-full">
			<DashboardNav />
			<div ref={heightHandle.ref}></div>
			<div
				className="flex px-[80px] pb-10"
				style={{ height: `calc(100vh - ${heightHandle.height}px)` }}
			>
				<div className="basis-3/12 pr-4 static" ref={sidebarWidthHandle.ref}>
					<Toggle
						setTab={function (tab: Tabs): void {
							actions.setTab(tab);
						}}
						currentTab={state.tabs}
					/>

					<div className="text-white">
						<p className="text-white">shapes</p>
						<button
							onClick={() => {
								actions.addCircle();
							}}
						>
							circle
						</button>
						<br />
						<button
							onClick={() => {
								actions.addRectangle();
							}}
						>
							rectangle
						</button>
					</div>
				</div>
				<div
					className="basis-6/12 px-4 overflow-auto h-full"
					ref={widthHandle.ref}
				>
					<Stage
						width={widthHandle.width}
						height={500}
						style={{ background: "white" }}
						onMouseDown={checkDeselect}
						onTouchStart={checkDeselect}
					>
						<Layer>
							<SelectableText
								shapeProps={{
									text: "this is a text",
								}}
								isSelected={
									true
								}
								onSelect={(attr) => {}}
								onChange={(attr) => {}}
								onDelete={function (id?: string | undefined): void {
									actions.deleteShape(id);
								}}
							/>
							{state.stage.circle.map((v, i) => (
								<Circ
									key={v.id}
									shapeProps={v}
									isSelected={
										state.stage.selectedId === null
											? false
											: state.stage.selectedId === v.id
									}
									onSelect={(attr) => {
										actions.setShapeAsSelectd(v.id || null);
									}}
									onChange={(attr) => {
										actions.transformShape(attr, i, "circle");
									}}
								/>
							))}
							{state.stage.rectangle.map((v, i) => (
								<Rectangle
									key={v.id}
									shapeProps={v}
									isSelected={
										state.stage.selectedId === null
											? false
											: state.stage.selectedId === v.id
									}
									onSelect={(attr) => {
										actions.setShapeAsSelectd(v.id || null);
									}}
									onChange={(attr) => {
										actions.transformRectangle(attr, i);
									}}
									onDelete={function (id?: string | undefined): void {
										actions.deleteShape(id);
									}}
								/>
							))}
						</Layer>
					</Stage>
				</div>
				<div className="basis-3/12 pl-4 static">
					<p className="text-md text-white mb-3">
						Description for current panel
					</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
