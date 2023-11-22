import React from "react";
import IconIndex from "../../assets/assetIndex";
import NavButtonGroup from "./components/NavButtonGroup/NavButtonGroup";
import { ButtonBase } from "@mui/material";

function Navbar() {
	return (
		<div
			className="flex justify-between items-center"
			style={{ padding: "24px 80px" }}
		>
			<div>
				<IconIndex.Logo />
			</div>
			<div>
				<NavButtonGroup />
			</div>

			<div className="flex gap-x-2 justify-center">
				<ButtonBase
					sx={{
						padding: 1,
						borderRadius: 20,
						'&:before': {
							backgroundColor: '#fff',
						}
					}}
				>
					<IconIndex.SearchIcon />
				</ButtonBase>
				<ButtonBase
					sx={{
						padding: 1,
						borderRadius: 20,

						"& .MuiTouchRipple-root": {
							border: "1px solid rgb(256, 256, 256, 0.4)",
							background: "#fff",
							opacity: 0.3,
						},
					}}
				>
					<IconIndex.BellIcon />
				</ButtonBase>
			</div>
		</div>
	);
}

export default Navbar;
