import StateUtils from "@src/modules/StateManagement/Core/StateUtils";
import { EditorTypes } from "../types";
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";

export default class RectEditActions extends StateUtils<EditorTypes.State> {
	private initCheck() {
		const selected = this.state.selected;
		if (!selected) return false;

		const id = selected.id;
		const shape = this.state.rectangle[id];
		if (shape === undefined) return false;

		return shape;
	}
	private initCheckId() {
		const selected = this.state.selected;
		if (!selected) return false;

		const id = selected.id;
		const shape = this.state.rectangle[id];
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
			o.rectangle[v].fill = color;
		});
	}
}
