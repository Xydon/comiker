import React, { useState } from "react";
import IconIndex from "../../assets/assetIndex";
import { motion } from "framer-motion";
import styles from "./Loading.module.css";
import { Button, Checkbox, makeStyles, styled } from "@mui/material";

function Loading() {
	const [state, setState] = useState({
		agreed: false,
	});

	return (
		<div className="bg-darkGray min-h-screen min-w-full w-full flex justify-center items-center flex-col gap-[16px]">
			<motion.div
				initial={{
					opacity: 0.1,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 1,
				}}
			>
				<IconIndex.Logo />
			</motion.div>

			<motion.div
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.3,
					delay: 1,
				}}
				className="flex justify-center items-center flex-col gap-[16px]"
			>
				<p className="text-md text-white">
					Please accept our terms of services and privacy .
				</p>

				<div className="flex items-center gap-x-3">
					<Checkbox
						sx={{
							color: "white",
							"& .MuiSvgIcon-root": {
								color: "#fff",
							},
						}}
						onChange={() => {
							setState((v) => {
								return { ...v, agreed: !v.agreed };
							});
						}}
					/>

					<p className="text-sm text-white">I agree</p>
				</div>

				<Button
					sx={{
						textTransform: "none",
						py: "14px",
						px: "20px",
						backgroundColor: state.agreed? '#FF1313': "#4A4A4A",
						"&:hover": {
              backgroundColor: '#FF1313',
							filter: "brightness(1.3)",
						},
					}}
					variant="contained"
					disableRipple={!state.agreed}
				>
					Continue
				</Button>
			</motion.div>
		</div>
	);
}

export default Loading;
