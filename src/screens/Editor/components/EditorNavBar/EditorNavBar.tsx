import IconIndex from "@src/assets/assetIndex";
import React from "react";
import UiElemButton from "./components/UiElemButton/UiElemButton";
import { ButtonBase } from "@mui/material";
import { useApplicationContext } from "../../Editor";

function EditorNavBar() {
	const { actions } = useApplicationContext();

	return (
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
					<p className="text text-white font-semibold">Heading</p>
				</div>
				<div className="flex gap-x-4">
					<p className="text-sm font-medium" style={{ color: "#BFBFBF" }}></p>
					<ButtonBase
						style={{
							background: "white",
							padding: "12px 20px",
							borderRadius: 8,
						}}
					>
						<p className="text-sm font-medium">Add Page</p>
					</ButtonBase>
					<ButtonBase
						style={{
							background: "white",
							padding: "12px 20px",
							borderRadius: 8,
						}}
					>
						<p className="text-sm font-medium">Share</p>
					</ButtonBase>
				</div>
			</div>
		</div>
	);
}

export default EditorNavBar;
