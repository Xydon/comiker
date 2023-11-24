import StateUtils from "@src/modules/StateManagement/Core/StateUtils";
import { EditorTypes } from "../types";

export default class CircleEditActions extends StateUtils<EditorTypes.State> {
	private initCheck() {
		const selected = this.state.selected;
		if (!selected) return false;

		const id = selected.id;
		const shape = this.state.ellipse[id];
		if (shape === undefined) return false;

		return shape;
	}
	private initCheckId() {
		const selected = this.state.selected;
		if (!selected) return false;

		const id = selected.id;
		const shape = this.state.ellipse[id];
		if (shape === undefined) return false;

		return id;
	}

	getSelectedColor() {
		const v = this.initCheck();
		if (v === false) return "";
		return v.fill || "#000";
	}

	setSelectedColor(color: string) {
		const v = this.initCheckId();
		if (v === false) return;
		this.mutateState((o) => {
			o.ellipse[v].fill = color;
		});
	}
}
