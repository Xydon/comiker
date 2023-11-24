import StateUtils from "@src/modules/StateManagement/Core/StateUtils";
import { EditorTypes } from "../types";

export default class TextEditActions extends StateUtils<EditorTypes.State> {
	private initCheck() {
		const selected = this.state.selected;
		if (!selected) return false;

		const id = selected.id;
		const shape = this.state.text[id];
		if (shape === undefined) return false;

		return shape;
	}
	private initCheckId() {
		const selected = this.state.selected;
		if (!selected) return false;

		const id = selected.id;
		const shape = this.state.text[id];
		if (shape === undefined) return false;

		return id;
	}
	getSelectedColor() {
		const v = this.initCheck();
		if (v === false) return "";
		return v.fill || "#000";
	}
	getSelectedFontSize() {
		const v = this.initCheck();
		if (v === false) return 0;
		return v.fontSize || 0;
	}
	getSelectedFontFamily() {
		const v = this.initCheck();
		if (v === false) return "sans-serif";

		return v.fontFamily;
	}
	getSelectedText() {
		const v = this.initCheck();
		if (v === false) return "";
		return v.text;
	}
	getFontStyle(): EditorTypes.FontStyle {
		const v = this.initCheck();
		if (v === false) return "normal";

		return v.fontStyle as EditorTypes.FontStyle;
	}


	setSelectedFontFamily(fontFamily: string) {
		const v = this.initCheckId();
		if (v === false) return;
		this.mutateState((o) => {
			o.text[v].fontFamily = fontFamily;
		});
	}
	setSelectedColor(color: string) {
		const v = this.initCheckId();
		if (v === false) return;
		this.mutateState((o) => {
			o.text[v].fill = color;
		});
	}
	setSelectedFontSize(size: number) {
		const v = this.initCheckId();
		if (v === false) return;
		this.mutateState((o) => {
			o.text[v].fontSize = size;
		});
	}
	setSelectedText(text: string) {
		const v = this.initCheckId();
		if (v === false) return;
		this.mutateState((o) => {
			o.text[v].text = text;
		});
	}
	setSelectedFontStyle(style: EditorTypes.FontStyle) {
		const v = this.initCheckId();
		if (v === false) return;
		this.mutateState((o) => {
			o.text[v].fontStyle = style;
		});
	}
}
