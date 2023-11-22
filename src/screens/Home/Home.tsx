import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import IconIndex from "@src/assets/assetIndex";

function Home() {
	return (
		<div className="bg-darkGray  min-w-full w-full">
			<div
				id="hero"
				className={"flex flex-col min-h-screen " + styles.sectionHero}
			>
				<Navbar />
				<div className="grow" style={{ padding: 60 }}>
					<div className="flex flex-col items-center gap-y-4">
						<IconIndex.LogoHome />
						<div className="flex items-center flex-col gap-y-2">
							<p className="text-4xl font-semibold text-white">
								Create Your Own Comic Strip in Minutes Using AI
							</p>
							<p className="text-neutral-300 text-center" style={{maxWidth: '70%'}}>
								With our easy-to-use web app, you can create your own 10-panel
								comic strip in just minutes. Simply input the text for your
								comic panels, and our text-to-image API will generate the images
								for you. You can then customize your comic with speech bubbles,
								text annotations, and other features.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="faq" className={"flex flex-col"}></div>
		</div>
	);
}

export default Home;
