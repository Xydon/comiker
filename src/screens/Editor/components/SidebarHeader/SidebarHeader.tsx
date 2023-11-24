import React from "react";
import Container from "./components/Container/Container";

interface Props {
	heading: string;
	topBorder?: boolean;
}

function SidebarHeader(props: Props) {
	const { heading, topBorder } = props;
	return (
		<Container
			className={
				topBorder
					? "border-b border-b-[#323232] border-t border-t-[#323232]"
					: "border-b border-b-[#323232]"
			}
			style={{ paddingLeft: 27 }}
		>
			<p style={{ color: "white", fontSize: 13, fontWeight: 700 }}>{heading}</p>
		</Container>
	);
}

export default SidebarHeader;
