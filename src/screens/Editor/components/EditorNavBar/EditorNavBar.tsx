import React from "react";

function EditorNavBar() {
	return (
		<div style={{ padding: 16 }}>
			<div className="flex justify-between">
				<div className="flex gap-x-8">
					<div>{/* logo */}</div>
					<div className="flex gap-x-4">{/* items */}</div>
				</div>
				<div>{/* heading */}</div>
				<div>{/* buttons */}</div>
			</div>
		</div>
	);
}

export default EditorNavBar;
