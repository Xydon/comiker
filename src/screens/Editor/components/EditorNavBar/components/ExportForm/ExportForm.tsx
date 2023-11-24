import React, { useState } from "react";
import styles from "./ExportForm.module.css";
import { ButtonBase } from "@mui/material";

function ExportForm() {
	const [selected, setSelected] = useState<"png" | "pdf">("png");

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
			<p className="text-xl font-semibold text-white px-8 py-5 border-b border-b-[#323232]">
				Export File
			</p>
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
						Export as png
					</p>
				</div>
			</div>
			<div className="px-8">
				<ButtonBase
					style={{ background: "white", padding: "10px", width: "100%" }}
				>
					<p>Generate</p>
				</ButtonBase>
			</div>
		</div>
	);
}

export default ExportForm;
