import { ButtonBase } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function IdeaChip(props: { children: React.ReactNode }) {
	const { children } = props;
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/editor", { state: { prompt: children as string } });
	};
	return (
		<ButtonBase
			sx={{
				background: "#2B2B2F",
				padding: "10px",
				borderRadius: "8px",
				color: "white",
			}}
			onClick={() => {
				handleClick();
			}}
		>
			{children}
		</ButtonBase>
	);
}

export default IdeaChip;
