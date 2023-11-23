import React from "react";

function Container(
	props: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
) {
	const { children } = props;
	let style = { ...props.style, height: 52 };
	let classname = props.className + " flex items-center ";

	return (
		<div {...props} style={style} className={classname}>
			{children}
		</div>
	);
}

export default Container;
