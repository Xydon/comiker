import { ButtonBase } from "@mui/material";
import React from "react";

function IdeaChip(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<ButtonBase
			sx={{
				background: "#2B2B2F",
				padding: "10px",
				borderRadius: "8px",
        color: 'white'
			}}
		>
			{children}
		</ButtonBase>
	);
}

export default IdeaChip;
