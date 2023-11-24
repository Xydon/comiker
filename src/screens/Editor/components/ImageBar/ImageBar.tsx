import React from "react";
import { useApplicationContext } from "../../Editor";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import { TextField } from "@mui/material";
import styles from "./ImageBar.module.css";
import GenerateButton from "./components/GenerateButton/GenerateButton";
import BlobImageRenderer from "@src/screens/Dashboard/components/konva/BlobImageRenderer/BlobImageRenderer";

function ImageBar() {
	const { state, actions } = useApplicationContext();

	return (
		<div className="w-full">
			<SidebarHeader heading={"Images"} />
			<div
				className="flex flex-wrap p-3 overflow-auto"
				style={{ maxHeight: 200 }}
			>
				{Object.entries(state.imgSrc).map((v) => {
					return (
						<BlobImageRenderer
							onClick={() => {
								actions.createImage(v[0]);
							}}
							key={v[0]}
							blobData={v[1]}
							style={{ height: 80 }}
						/>
					);
				})}
			</div>
			<div>
				<SidebarHeader topBorder heading="Generate More" />
				<div className="h-4" />
				<div className="p-3">
					<textarea
						placeholder="enter prompt"
						name="text-area"
						id="text-area"
						className={"rounded mb-2 " + styles.textArea}
						onChange={(v) => {
							actions.setPrompt(v.target.value);
						}}
					></textarea>
					<GenerateButton
						onClick={function (): void {
							actions.fetchImage();
						}}
						isLoading={state.loading.fetchImage.status === "initialized"}
					/>
				</div>
			</div>
		</div>
	);
}

export default ImageBar;
