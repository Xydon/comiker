import IconIndex from "@src/assets/assetIndex";
import React, { useState } from "react";
import UiElemButton from "./components/UiElemButton/UiElemButton";
import { Backdrop, ButtonBase, Card, Tooltip } from "@mui/material";
import { useApplicationContext } from "../../Editor";
import styles from "./EditorNavBar.module.css";
import PopUpContainer from "@src/components/PopUpContainer/PopUpContainer";
import ExportForm from "./components/ExportForm/ExportForm";

function EditorNavBar() {
	const { actions } = useApplicationContext();
	const [heading, setHeading] = useState("heading");
	const [showBackdrop, setShowBackdrop] = useState(false);

	return (
		<>
			<div style={{ padding: "16px 35px" }}>
				<div className="flex justify-between items-center">
					<div className="flex gap-x-8 items-center">
						<div>
							{/* logo */}
							<IconIndex.ComikerCircle />
						</div>
						<div className="flex gap-x-8">
							{/* items */}
							<UiElemButton
								onClick={() => {
									actions.createRectangle();
								}}
								icon={<IconIndex.UISquare />}
								text={"rectangle"}
							/>
							<UiElemButton
								onClick={() => {
									actions.createEllipse();
								}}
								icon={<IconIndex.UICircle />}
								text={"circle"}
							/>
							<UiElemButton
								onClick={() => {
									actions.createText();
								}}
								icon={<IconIndex.UIText />}
								text={"text"}
							/>
						</div>
					</div>
					<div>
						{/* heading */}
						<input
							className="text text-white font-semibold bg-transparent outline-none"
							value={heading}
							onChange={(e) => {
								setHeading(e.target.value);
							}}
							onBlur={() => {
								setHeading((v) => {
									if (v.trim().length === 0) {
										return "heading";
									}
									return v;
								});
							}}
						></input>
					</div>
					<div className="flex gap-x-4">
						<p className="text-sm font-medium" style={{ color: "#BFBFBF" }}></p>
						<Tooltip title={"Coming soon"}>
							<ButtonBase
								style={{
									background: "white",
									padding: "12px 20px",
									borderRadius: 8,
								}}
							>
								<p className="text-sm font-medium">Add Page</p>
							</ButtonBase>
						</Tooltip>
						<ButtonBase
							style={{
								background: "white",
								padding: "12px 20px",
								borderRadius: 8,
							}}
							onClick={() => {
								setShowBackdrop((v) => !v);
							}}
						>
							<p className="text-sm font-medium">Share</p>
						</ButtonBase>
					</div>
				</div>
			</div>
			{showBackdrop && (
				<ExportForm
					close={function (): void {
						setShowBackdrop(false);
					}}
				/>
			)}
		</>
	);
}

export default EditorNavBar;
