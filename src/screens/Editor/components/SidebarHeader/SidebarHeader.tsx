import React from "react";
import Container from "./components/Container/Container";

interface Props {
	heading: string;
	topBorder?: boolean;
	removeBotttom?: boolean;
}

function SidebarHeader(props: Props) {
	const { heading, topBorder, removeBotttom } = props;
	let className = "";

	if (topBorder) {
		className = "border-t border-t-[#323232]";
	}

	if (!removeBotttom) {
		className += " " + "border-b border-b-[#323232]";
	}

	return (
		<Container className={className} style={{ paddingLeft: 27 }}>
			<p style={{ color: "white", fontSize: 13, fontWeight: 700 }}>{heading}</p>
		</Container>
	);
}

export default SidebarHeader;
