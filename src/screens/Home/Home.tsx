import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import IconIndex from "@src/assets/assetIndex";
import FeedBar from "@src/components/FeedBar/FeedBar";
import { comicPrompts } from "@src/constants/constants";
import IdeaChip from "./components/IdeaChip/IdeaChip";

function Home() {
	return (
		<div className="bg-darkGray  min-w-full w-full">
			<div
				className={
					"absolute w-full h-screen top-0 left-0 " + styles.sectionHero
				}
			/>
			<div
				className="absolute w-full h-full top-0 left-0"
				style={{
					background:
						"linear-gradient(180deg, rgba(20, 20, 20, 0.00) 0%, #141414 100%)",
				}}
			/>

			{/* hero section */}
			<div id="hero" className={"flex flex-col min-h-screen z-10 "}>
				<div className="z-50">
					<Navbar />
				</div>
				<div className="grow flex flex-col items-center gap-y-[40px] px-[150px] z-50">
					<div className="animate-spin">
						<IconIndex.LogoHome />
					</div>

					<div className="flex flex-col items-center gap-y-2">
						<p className="text-4xl font-semibold text-white">
							Create Your Own Comic Strip in Minutes Using AI
						</p>
						<p
							className="text-neutral-300 text-center"
							style={{ maxWidth: "70%" }}
						>
							With our easy-to-use web app, you can create your own 10-panel
							comic strip in just minutes. Simply input the text for your comic
							panels, and our text-to-image API will generate the images for
							you. You can then customize your comic with speech bubbles, text
							annotations, and other features.
						</p>
					</div>

					<FeedBar />

					<div className="flex flex-col items-center gap-y-4">
						<div className="flex gap-x-2">
							<IconIndex.IdeaIcon />
							<p className="text-md text-white">Don't have Ideas? Try These</p>
						</div>

						<div className="flex flex-wrap basis-3/4 gap-2">
							{comicPrompts.map((v) => (
								<IdeaChip>{v}</IdeaChip>
							))}
						</div>
					</div>

					<div></div>
				</div>
			</div>

			{/* explore section */}
			<div id="explore" style={{ padding: "100px 80px" }}>
				<div>
					<div className="flex justify-between">
						<div className="flex flex-col gap-y-3">
							<p className="text-2xl font-semibold text-white">
								Explore Community
							</p>
							<p className="text-neutral-300">
								Whether you're looking for a comedy to make you laugh, a drama
								to make you think, or a documentary to learn something new
							</p>
						</div>
						<div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
