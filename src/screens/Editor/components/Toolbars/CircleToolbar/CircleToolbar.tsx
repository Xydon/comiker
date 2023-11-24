import { useApplicationContext } from "@src/screens/Editor/Editor";
import React from "react";

function CircleToolbar() {
	const { circleToolbarActions } = useApplicationContext();
	return (
		<div className="flex grow gap-x-5 items-center border-b border-b-[#323232] pl-5">
			{/* color change */}
			<div className="flex gap-x-1 items-center">
				<div
					className="h-8 w-8 rounded border-2 border-neutral-800"
					style={{ backgroundColor: circleToolbarActions.getSelectedColor() }}
				/>
				<div className="relative">
					<p className="text-sm text-white">
						{circleToolbarActions.getSelectedColor()}
					</p>
					<input
						type="color"
						className="absolute top-0 left-0 opacity-0"
						onChange={(e) => {
							circleToolbarActions.setSelectedColor(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default CircleToolbar;
