import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import { EditorTypes } from "../types";
import generateId from "@src/utils/generateId";
import { KonvaEventObject } from "konva/lib/Node";
import getImageService from "../server/services/getImageService";
import { RectConfig } from "konva/lib/shapes/Rect";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { TextConfig } from "konva/lib/shapes/Text";
import { ImageConfig } from "konva/lib/shapes/Image";



export default class EditorActions extends ServerStateUtils<EditorTypes.State> {
	private fill = "#3a3a3a";

	createRectangle() {
		this.mutateState((v) => {
			const id = generateId();
			v.rectangle[id] = {
				id,
				width: 40,
				height: 40,
				fill: this.fill,
				x: 300,
				y: 400,
			};
		});
	}
	createEllipse() {
		this.mutateState((v) => {
			const id = generateId();
			v.ellipse[id] = {
				id,
				radiusX: 20,
				radiusY: 20,
				x: 200,
				y: 200,
				fill: this.fill,
			};
		});
	}
	createText() {
		this.mutateState((v) => {
			const id = generateId();
			v.text[id] = {
				id,
				text: "Text",
				x: 200,
				y: 300,
				fontSize: 16,
			};
		});
	}
	createLine() {}
	createImage(id: string) {
		this.mutateState((v) => {
			if (v.imgSrc[id] === undefined) return;
			const newId = generateId();
			v.image[newId] = {
				id: newId,
				src: v.imgSrc[id],
				image: undefined,
				x: 50,
				y: 50,
			};
		});
	}

	setSelection(selection: typeof this.state.selected) {
		this.mutateState((v) => {
			v.selected = selection;
		});
	}

	setSelectionBlur(
		e: KonvaEventObject<MouseEvent> | KonvaEventObject<TouchEvent>
	) {
		// deselect when clicked on empty area
		const clickedOnEmpty = e.target === e.target.getStage();
		if (clickedOnEmpty) {
			this.setSelection(null);
		}
	}

	setPrompt(prompt: string) {
		this.mutateState((v) => {
			v.prompt = prompt;
		});
	}

	transformRect(id: string, attr: RectConfig) {
		this.mutateState((v) => {
			v.rectangle[id] = attr;
		});
	}
	transformEllipse(id: string, attr: EllipseConfig) {
		this.mutateState((v) => {
			v.ellipse[id] = attr;
		});
	}
	transformText(id: string, attr: TextConfig) {
		this.mutateState((v) => {
			v.text[id] = attr;
		});
	}
	transformImage(id: string, attr: ImageConfig) {
		this.mutateState((v) => {
			v.image[id] = { ...attr, src: v.image[id].src };
		});
	}

	clubElements() {
		const arr: { id: string; type: EditorTypes.Elements; color: string }[] = [];

		let carr = Object.values(this.state.ellipse);

		carr.forEach((v) => {
			arr.push({
				id: v.id || "id",
				color: v.fill || "#fff",
				type: "ellipse",
			});
		});

		let darr = Object.values(this.state.rectangle);
		darr.forEach((v) => {
			arr.push({
				id: v.id || "id",
				type: "rectangle",
				color: v.fill || "#fff",
			});
		});

		let earr = Object.values(this.state.text);
		earr.forEach((v) => {
			arr.push({
				id: v.id || "id",
				type: "text",
				color: v.fill || "#fff",
			});
		});

		let farr = Object.values(this.state.image);
		farr.forEach((v) => {
			arr.push({
				id: v.id || "id",
				type: "image",
				color: v.fill || "#fff",
			});
		});

		function shuffle(array: any[]) {
			array.sort(() => Math.random() - 0.5);
		}

		// shuffle(arr);

		return arr;
	}

	async fetchImage() {
		if (!this.state.prompt.trim()) return;

		const res = await this.handleAsync("fetchImage", () =>
			getImageService(this.state.prompt)
		);

		if (res) {
			this.mutateState((v) => {
				const id = generateId();
				v.imgSrc[id] = res;
			});
		}
	}
}
