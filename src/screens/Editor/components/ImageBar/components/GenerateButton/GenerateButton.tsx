import { ButtonBase } from "@mui/material";
import React from "react";

interface ButtonProps {
	onClick: () => void;
	isLoading: boolean;
}

function GenerateButton({ onClick, isLoading }: ButtonProps) {
	return (
		<ButtonBase
			onClick={() => {
				onClick();
			}}
		>
			<button
				type="button"
				className={`flex relative ${isLoading ? "gap-x-2" : ""} items-center ${
					isLoading ? "bg-neutral-900" : "bg-themePurple"
				} rounded shadow-sm text-white font-semibold px-3 py-2 text-sm cursor-pointer`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className={`animate-spin-slow ${!isLoading ? "w-0" : ""} `}
				>
					<path
						fill="#dedede"
						d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
						opacity=".25"
					/>
					<path
						fill="#dedede"
						d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
					>
						<animateTransform
							attributeName="transform"
							dur="0.75s"
							repeatCount="indefinite"
							type="rotate"
							values="0 12 12;360 12 12"
						/>
					</path>
				</svg>
				{isLoading ? <>Processing...</> : <>Generate</>}
			</button>
		</ButtonBase>
	);
}

export default GenerateButton;
