import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { RectConfig } from "konva/lib/shapes/Rect";
import { TextConfig } from "konva/lib/shapes/Text";

export namespace EditorTypes {
	export type Elements = "rectangle" | "ellipse" | "text";
	export interface State {
		rectangle: Record<string, RectConfig>;
		ellipse: Record<string, EllipseConfig>;
		text: Record<string, TextConfig>;
		selected: {
			id: string;
			shape: Elements;
		} | null;
		loading: Record<string, AsyncState>;
	}
}
