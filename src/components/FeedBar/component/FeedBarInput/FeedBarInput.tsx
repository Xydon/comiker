import React from "react";
import styles from "./FeedBarInput.module.css";

function FeedBarInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			{...props}
			placeholder="Tell us what you're looking for, write your scription or idea separated by commas"
			style={{ ...props.style, fontSize: 20 }}
			type="text"
			className={styles.input}
		/>
	);
}

export default FeedBarInput;
