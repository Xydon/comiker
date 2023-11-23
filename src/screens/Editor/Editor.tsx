import React from "react";
import EditorNavBar from "./components/EditorNavBar/EditorNavBar";
import SidebarHeader from "./components/SidebarHeader/SidebarHeader";
import Artboard from "./components/Artboard/Artboard";
import useWidth from "@src/modules/hooks/useWidth";
import useHeight from "@src/modules/hooks/useHeight";

function Editor() {
	const widthHandle = useWidth();
	const navbarHeight = useHeight();
	const toolbarHeight = useHeight();

	return (
		<div className="bg-black flex flex-col w-screen h-screen">
			<div className="border-b border-b-[#323232]" ref={navbarHeight.ref}>
				<EditorNavBar />
			</div>
			<div className="w-full flex grow">
				<div className="basis-1/5 border-r border-r-[#323232]">
					<SidebarHeader heading={"Element"} />
				</div>
				<div
					className="basis-3/5 p-8 overflow-auto"
					ref={widthHandle.ref}
					style={{
						height: `calc(100vh - ${
							navbarHeight.height + toolbarHeight.height
						}px)`,
					}}
				>
					<div ref={toolbarHeight.ref}>
						<SidebarHeader heading={""} />
					</div>
					<Artboard
						width={widthHandle.width * 0.7}
						height={800}
						style={{ backgroundColor: "white" }}
					/>
				</div>
				<div className="basis-1/5 border-l border-l-[#323232]">
					<SidebarHeader heading={"Images"} />
				</div>
			</div>
		</div>
	);
}

export default Editor;
