import { CircleConfig } from "konva/lib/shapes/Circle";
import { RectConfig } from "konva/lib/shapes/Rect";
import { TextConfig } from "konva/lib/shapes/Text";

export namespace DashboardTypes {
	export type Tabs = "panel" | "layer";
	export type Shapes = "circle" | "rectangle" | "text";
	export interface State {
		tabs: Tabs;
		stage: {
			circle: CircleConfig[];
			rectangle: RectConfig[];
			text: TextConfig[];
			selectedId: string | null;
		};
		loading: {};
	}
}
