import React from "react";
import styles from "./ComponentList.module.css";
import IconIndex from "@src/assets/assetIndex";

interface Props {
	display: React.ReactNode;
	text: string;
}

export function ComponentList(
	props: Props & React.HTMLAttributes<HTMLDivElement>
) {
	const { display, text, ...rest } = props;
	return (
		<div
			{...rest}
			className={"flex items-center " + styles.container}
			style={{ columnGap: 16 }}
		>
			{display}
			<p className="text-sm text-white">{text}</p>
		</div>
	);
}

export function CircleComponentList(
	props: { id: string; color: string } & React.HTMLAttributes<HTMLDivElement>
) {
	const { id, color, ...rest } = props;
	return (
		<ComponentList
			{...rest}
			display={
				<svg height={12} width={12}>
					<ellipse cx={6} cy={6} rx="6px" ry="6px" style={{ fill: color }} />
				</svg>
			}
			text={"Circle " + id}
		/>
	);
}

export function RectComponentList(
	props: { id: string; color: string } & React.HTMLAttributes<HTMLDivElement>
) {
	const { id, color, ...rest } = props;
	return (
		<ComponentList
			{...rest}
			display={
				<svg height={10} width={10}>
					<rect width={10} height={10} style={{ fill: color }} />
				</svg>
			}
			text={"Rectangle " + id}
		/>
	);
}

export function TextComponentList(
	props: { id: string; color: string } & React.HTMLAttributes<HTMLDivElement>
) {
	const { id, color, ...rest } = props;
	return (
		<ComponentList
			{...rest}
			display={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
				>
					<path
						d="M2 3.5C2 3.03406 2 2.80109 2.07612 2.61732C2.17761 2.37229 2.37229 2.17761 2.61732 2.07612C2.80109 2 3.03406 2 3.5 2H8.5C8.96594 2 9.19891 2 9.38268 2.07612C9.62771 2.17761 9.82239 2.37229 9.92388 2.61732C10 2.80109 10 3.03406 10 3.5M4.5 10H7.5M6 2V10"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			}
			text={"Text " + id}
		/>
	);
}

export function ImageComponentList(
	props: { id: string; color: string } & React.HTMLAttributes<HTMLDivElement>
) {
	const { id, color, ...rest } = props;
	return (
		<ComponentList
			{...rest}
			display={<IconIndex.ImageIcon />}
			text={"Image " + id}
		/>
	);
}
