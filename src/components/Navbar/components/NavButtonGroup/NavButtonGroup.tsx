import React, { useState } from "react";
import styles from "./NavButtonGroup.module.css";
import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { navlinks } from "@src/constants/constants";

function NavButton(
	props: React.HTMLAttributes<HTMLButtonElement> & {
		children?: string;
		isActive: boolean;
		link: string;
	}
) {
	const { children, isActive, link, ...rest } = props;
	return (
		<button
			{...rest}
			// href={link}
			style={{
				padding: "12px 20px",
				cursor: "pointer",
				border: "1px solid transparent",
			}}
			className={isActive ? styles.buttonContainer : ""}
		>
			<p className={styles.buttonText}>{children}</p>
		</button>
	);
}

function NavButtonGroup(props: { currentLink: string }) {
	const { currentLink } = props;
	const entries = Object.entries(navlinks);

	const [current, setCurrent] = useState(entries[0][1]);

	return (
		<div className={styles.container}>
			{Object.entries(navlinks).map((v, i) => (
				<NavButton
					isActive={current === v[1]}
					onClick={() => {
						setCurrent(v[1]);
					}}
					link={""}
				>
					{v[0]}
				</NavButton>
			))}
		</div>
	);
}

export default NavButtonGroup;
