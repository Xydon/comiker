import React, { useState } from "react";
import styles from "./ExportForm.module.css";
import { ButtonBase } from "@mui/material";
import { useApplicationContext } from "@src/screens/Editor/Editor";
import CloseIcon from "@mui/icons-material/Close";

function ExportForm({ close }: { close: () => void }) {
	const [selected, setSelected] = useState<"png" | "pdf">("png");

	const api = useApplicationContext();

	return (
		<div
			style={{
				maxWidth: 600,
				maxHeight: 600,
				width: "50vw",
				height: "70vh",
				zIndex: 100,
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}
			className="bg-darkGray"
		>
			<div className="flex justify-between px-8 py-5 border-b border-b-[#323232] items-center">
				<p className="text-xl font-semibold text-white ">Export File</p>

				<ButtonBase
					sx={{ padding: 2, borderRadius: 39 }}
					TouchRippleProps={{
						style: {
							background: "rgba(256,256,256, 0.2)",
						},
					}}
					onClick={() => {
						close();
					}}
				>
					<CloseIcon sx={{ color: "white" }} />
				</ButtonBase>
			</div>
			<div className="flex gap-x-4 justify-between p-8">
				<div
					className={
						"border grow p-4 " + (selected !== "png" ? styles.card : "")
					}
					style={{
						height: 280,
						background: selected === "png" ? "white" : "transparent",
					}}
					onClick={() => {
						setSelected("png");
					}}
				>
					<p
						className="text-md "
						style={{ color: selected === "png" ? "black" : "white" }}
					>
						Export as png
					</p>
				</div>
				<div
					className={
						"border grow p-4 " + (selected !== "pdf" ? styles.card : "")
					}
					style={{
						height: 280,
						background: selected === "pdf" ? "white" : "transparent",
					}}
					onClick={() => {
						setSelected("pdf");
					}}
				>
					<p
						className="text-md "
						style={{ color: selected !== "png" ? "black" : "white" }}
					>
						Export as pdf
					</p>
				</div>
			</div>
			<div className="px-8">
				<ButtonBase
					style={{ background: "white", padding: "10px", width: "100%" }}
					onClick={() => {
						if (selected === "pdf") {
							api.state.functions.downloadAsPdf();
						} else {
							api.state.functions.downloadAsPng();
						}
					}}
				>
					<p>Generate</p>
				</ButtonBase>
			</div>
		</div>
	);
}

export default ExportForm;
