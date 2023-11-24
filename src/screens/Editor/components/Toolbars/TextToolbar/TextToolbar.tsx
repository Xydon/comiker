import { useApplicationContext } from "@src/screens/Editor/Editor";
import { EditorTypes } from "@src/screens/Editor/types";
import React from "react";

function TextToolbar() {
	const { textToolbarActions } = useApplicationContext();

	return (
		<div className="flex grow gap-x-7 items-center border-b border-b-[#323232] pl-5">
			{/* color change */}
			<div className="flex gap-x-1 items-center">
				<div
					className="h-8 w-8 rounded border-2 border-neutral-800"
					style={{ backgroundColor: textToolbarActions.getSelectedColor() }}
				/>
				<div className="relative">
					<p className="text-sm text-white">
						{textToolbarActions.getSelectedColor()}
					</p>
					<input
						type="color"
						className="absolute top-0 left-0 opacity-0"
						onChange={(e) => {
							textToolbarActions.setSelectedColor(e.target.value);
						}}
					/>
				</div>
			</div>

			{/* text change */}
			<div className="flex gap-x-4 items-center">
				<p className="text-sm text-white">Text</p>
				<input
					type="text"
					className="bg-neutral-900 rounded-sm text-white px-1"
					value={textToolbarActions.getSelectedText()}
					onChange={(e) => {
						textToolbarActions.setSelectedText(e.target.value);
					}}
				/>
			</div>

			{/* text change */}
			<div className="flex gap-x-4 items-center">
				<p className="text-sm text-white">Font size</p>
				<input
					type="number"
					className="bg-neutral-900 rounded-sm text-white w-16 px-1"
					value={textToolbarActions.getSelectedFontSize()}
					onChange={(e) => {
						textToolbarActions.setSelectedFontSize(parseFloat(e.target.value));
					}}
				/>
			</div>

      {/* font weight */}
			<div className="flex gap-x-4 items-center">
				<p className="text-sm text-white">Font weight</p>
				<select
					value={textToolbarActions.getFontStyle()}
					onChange={(e) => {
						textToolbarActions.setSelectedFontStyle(
							e.target.value as EditorTypes.FontStyle
						);
					}}
				>
					<option value="bold">bold</option>
					<option value="italic">italic</option>
					<option value="normal">normal</option>
					<option value="italic bold">italic bold</option>
					<option value="bold italic">bold italic</option>
				</select>
			</div>
			
      
      <div className="flex gap-x-4 items-center">
				<p className="text-sm text-white">Font weight</p>
				<select
					value={textToolbarActions.getFontStyle()}
					onChange={(e) => {
						textToolbarActions.setSelectedFontStyle(
							e.target.value as EditorTypes.FontStyle
						);
					}}
				>
					<option value="bold">bold</option>
					<option value="italic">italic</option>
					<option value="normal">normal</option>
					<option value="italic bold">italic bold</option>
					<option value="bold italic">bold italic</option>
				</select>
			</div>
		</div>
	);
}

export default TextToolbar;
