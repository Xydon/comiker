import React from "react";
import styles from "./UiElemButton.module.css";

function UiElemButton(
	props: React.HTMLAttributes<HTMLDivElement> & {
		icon: React.ReactNode;
		text: string;
	}
) {
	const { icon, text, ...rest } = props;

	return (
		<div
			{...rest}
			className={"flex items-center " + styles.container}
			style={{ columnGap: 16 }}
		>
			<div className="flex items-center scale-75">{icon}</div>
			<p style={{ fontSize: 13, color: "white", fontWeight: 600 }}>{text}</p>
		</div>
	);
}

export default UiElemButton;
