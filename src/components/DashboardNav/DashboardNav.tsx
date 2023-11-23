import IconIndex from "@src/assets/assetIndex";
import React from "react";

function DashboardNav() {
	return (
		<div
			className="flex justify-between items-center"
			style={{ padding: "24px 80px" }}
		>
			<div>
				<IconIndex.Logo />
			</div>
		</div>
	);
}

export default DashboardNav;
