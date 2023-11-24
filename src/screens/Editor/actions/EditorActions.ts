import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import { EditorTypes } from "../types";
import generateId from "@src/utils/generateId";
import { KonvaEventObject } from "konva/lib/Node";

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
}
