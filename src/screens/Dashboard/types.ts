import { CircleConfig } from "konva/lib/shapes/Circle";
import { RectConfig } from "konva/lib/shapes/Rect";

export namespace DashboardTypes {
	export type Tabs = "panel" | "layer";
	export type Shapes = "circle" | "rectangle"
	export interface State {
		tabs: Tabs;
		stage: {
			circle: CircleConfig[],
			rectangle: RectConfig[],
			selectedId: string | null
		}
    loading: {}
	}
}
