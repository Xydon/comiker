import React from "react";
import { useApplicationContext } from "../../Editor";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import { TextField } from "@mui/material";
import styles from "./ImageBar.module.css";
import GenerateButton from "./components/GenerateButton/GenerateButton";

function ImageBar() {
	const { state, actions } = useApplicationContext();

	return (
		<div className="w-full">
			<div className="flex flex-wrap p-3" style={{ maxHeight: 500 }}></div>
			<div>
				<SidebarHeader topBorder heading="Generate More" />
				<div className="h-4" />
				<div className="p-3">
					<textarea
						placeholder="enter prompt"
						name="text-area"
						id="text-area"
						className={"rounded " + styles.textArea}
					></textarea>
					<GenerateButton onClick={function (): void {}} isLoading={false} />
				</div>
			</div>
		</div>
	);
}

export default ImageBar;
