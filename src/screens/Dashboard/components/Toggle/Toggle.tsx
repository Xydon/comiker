import React, { useState } from "react";
import styles from "./Toggle.module.css";

export type Tabs = "panel" | "layer";

interface ToggleProps {
	setTab: (tab: Tabs) => void;
	currentTab: Tabs;
}

function Toggle(props: ToggleProps) {
	const { setTab, currentTab } = props;

	return (
		<div className={styles.container}>
			<button
				className={
					styles.buttonLayout +
					" " +
					(currentTab === "panel" ? styles.buttonActive : "")
				}
				onClick={() => {
					setTab("panel");
				}}
			>
				Panel
			</button>
			<button
				className={
					styles.buttonLayout +
					" " +
					(currentTab === "layer" ? styles.buttonActive : "")
				}
				onClick={() => {
					setTab("layer");
				}}
			>
				Layers
			</button>
		</div>
	);
}

export default Toggle;
