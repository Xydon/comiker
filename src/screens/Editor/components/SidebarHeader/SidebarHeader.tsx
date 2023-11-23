import React from "react";
import Container from "./components/Container/Container";

interface Props {
	heading: string;
}

function SidebarHeader(props: Props) {
	const { heading } = props;
	return (
		<Container className="border-b border-b-[#323232]" style={{paddingLeft: 27}}>
			<p style={{ color: "white", fontSize: 13, fontWeight: 700 }}>{heading}</p>
		</Container>
	);
}

export default SidebarHeader;
