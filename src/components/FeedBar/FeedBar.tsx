import React from "react";
import styles from "./FeedBar.module.css";
import FeedBarInput from "./component/FeedBarInput/FeedBarInput";
import FeedBarButton from "./component/FeedBarButton/FeedBarButton";
import { Link } from "react-router-dom";

function FeedBar() {
	return (
		<div className="flex justify-center w-full">
			{/* <FeedBarInput /> */}
			<Link to={"/editor"}>
				<FeedBarButton />
			</Link>
		</div>
	);
}

export default FeedBar;
