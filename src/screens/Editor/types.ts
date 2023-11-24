import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { ImageConfig } from "konva/lib/shapes/Image";
import { RectConfig } from "konva/lib/shapes/Rect";
import { TextConfig } from "konva/lib/shapes/Text";

export namespace EditorTypes {
	export type Elements = "rectangle" | "ellipse" | "text" | "image";
	export type CImageConfig = ImageConfig & { src: string };
	export interface State {
		rectangle: Record<string, RectConfig>;
		ellipse: Record<string, EllipseConfig>;
		text: Record<string, TextConfig>;
		image: Record<string, CImageConfig>;
		selected: {
			id: string;
			shape: Elements;
		} | null;
		loading: Record<string, AsyncState>;
	}
}
