import React from "react";
import styles from "./NavButtonGroup.module.css";
import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { navlinks } from "@src/constants/constants";

function NavButton(
	props: React.HTMLAttributes<HTMLButtonElement> & {
		children?: string;
		isActive: boolean;
	}
) {
	const { children, isActive, ...rest } = props;
	return (
		<button
			{...rest}
			style={{ padding: "12px 20px" }}
			className={isActive ? styles.buttonContainer : ""}
		>
			<p className={styles.buttonText}>{children}</p>
		</button>
	);
}

function NavButtonGroup() {
	return (
		<div className={styles.container}>
			{Object.entries(navlinks).map((v, i) => (
				<NavButton isActive={i == 0}>{v[0]}</NavButton>
			))}
		</div>
	);
}

export default NavButtonGroup;
