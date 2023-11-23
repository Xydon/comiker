import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import { DashboardTypes } from "../types";
import { RectConfig } from "konva/lib/shapes/Rect";

export default class DashboardActions extends ServerStateUtils<DashboardTypes.State> {
	setTab(tab: DashboardTypes.Tabs) {
		this.mutateState((v) => {
			v.tabs = tab;
		});
	}

	addCircle() {
		this.mutateState((v) => {
			v.stage.circle.push({
				id: Math.random().toString(),
				x: 100,
				y: 100,
				radius: 20,
				fill: "red",
			});
		});
	}

	addRectangle() {
		this.mutateState((v) => {
			v.stage.rectangle.push({
				id: Math.random().toString(),
				x: 100,
				y: 100,
				width: 20,
				height: 20,
				fill: "black",
			});
		});
	}

	addText() {
		this.mutateState((v) => {
			v.stage.text.push({
				id: Math.random().toString(),
				x: 100,
				y: 100,
				text: 'Text',
				fill: "black",
			});
		});
	}

	transformShape(
		attr: RectConfig,
		indx: number,
		shape: DashboardTypes.Shapes = "rectangle"
	) {
		try {
			this.mutateState((v) => {
				v.stage[shape][indx] = attr;
			});
		} catch (err) {}
	}

	transformRectangle(attr: RectConfig, indx: number) {
		try {
			this.mutateState((v) => {
				v.stage.rectangle[indx] = attr;
			});
		} catch (err) {}
	}

	setShapeAsSelectd(id: string | null) {
		this.mutateState((v) => {
			v.stage.selectedId = id;
		});
	}

	deleteShape(id: string | null | undefined) {
		this.mutateState((v) => {
			this.state.stage.circle = this.state.stage.circle.filter(
				(v) => v.id !== id
			);
			this.state.stage.rectangle = this.state.stage.rectangle.filter(
				(v) => v.id !== id
			);
		});
	}
}
