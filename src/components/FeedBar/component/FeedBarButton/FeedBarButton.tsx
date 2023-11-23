import React from "react";
import style from "./FeedBarButton.module.css";
import IconIndex from "@src/assets/assetIndex";

function FeedBarButton() {
	return (
		<button className={style.buttonContainer}>
			<p className={style.buttonText}>Generate</p>
			<IconIndex.ButtonStar />
		</button>
	);
}

export default FeedBarButton;
