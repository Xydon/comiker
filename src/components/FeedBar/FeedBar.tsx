import React from "react";
import styles from "./FeedBar.module.css";
import FeedBarInput from "./component/FeedBarInput/FeedBarInput";
import FeedBarButton from "./component/FeedBarButton/FeedBarButton";

function FeedBar() {
	return (
		<div className="flex gap-x-2 w-full">
			<FeedBarInput />
			<FeedBarButton />
		</div>
	);
}

export default FeedBar;
