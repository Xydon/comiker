import React from "react";
import styles from "./FeedBar.module.css";
import FeedBarInput from "./component/FeedBarInput/FeedBarInput";

function FeedBar() {
	return (
		<div className="flex gap-x-2">
			<FeedBarInput />
      
		</div>
	);
}

export default FeedBar;
