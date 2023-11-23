import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import IconIndex from "@src/assets/assetIndex";
import FeedBar from "@src/components/FeedBar/FeedBar";

function Home() {
	return (
		<div className="bg-darkGray  min-w-full w-full">
			<div
				id="hero"
				className={"flex flex-col min-h-screen " + styles.sectionHero}
			>
				<div
					className="absolute w-full h-full "
					style={{
						background:
							"linear-gradient(180deg, rgba(20, 20, 20, 0.00) 0%, #141414 100%)",
						zIndex: -1,
					}}
				></div>
				<Navbar />
				<div className="grow" style={{ padding: 60 }}>
					<div className="flex flex-col items-center gap-y-4">
						<div className="animate-spin">
							<IconIndex.LogoHome />
						</div>
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
				</div>

				
				<div id="faq" className={"flex flex-col"}>
					<FeedBar />
				</div>
			</div>
		</div>
	);
}

export default Home;
