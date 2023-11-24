import React, { useContext, useState } from "react";
import EditorNavBar from "./components/EditorNavBar/EditorNavBar";
import SidebarHeader from "./components/SidebarHeader/SidebarHeader";
import Artboard from "./components/Artboard/Artboard";
import useWidth from "@src/modules/hooks/useWidth";
import useHeight from "@src/modules/hooks/useHeight";
import { EditorTypes } from "./types";
import EditorActions from "./actions/EditorActions";

interface ApplicationContextTypes {
	state: EditorTypes.State;
	actions: EditorActions;
}
const ApplicationContext = React.createContext<ApplicationContextTypes>(
	{} as ApplicationContextTypes
);

export const useApplicationContext = () => useContext(ApplicationContext);

function Editor() {
	const widthHandle = useWidth();
	const navbarHeight = useHeight();
	const toolbarHeight = useHeight();

	const [state, setState] = useState<EditorTypes.State>({
		rectangle: {},
		ellipse: {},
		text: {},
		selected: null,
		loading: {},
	});

	const actions = new EditorActions(state, setState);

	return (
		<ApplicationContext.Provider value={{ state, actions }}>
			<div className="bg-black flex flex-col w-screen h-screen overflow-hidden">
				<div className="border-b border-b-[#323232]" ref={navbarHeight.ref}>
					<EditorNavBar />
				</div>
				<div className="w-full flex grow">
					<div className="basis-1/5 border-r border-r-[#323232]">
						<SidebarHeader heading={"Element"} />
					</div>
					<div className="basis-3/5" ref={widthHandle.ref}>
						<div ref={toolbarHeight.ref}>
							<SidebarHeader heading={"toolbar"} />
						</div>
						<div
							className="p-8 overflow-auto"
							style={{
								height: `calc(100vh - ${
									navbarHeight.height + toolbarHeight.height
								}px)`,
							}}
						>
							<Artboard
								width={widthHandle.width * 0.7}
								height={800}
								style={{ backgroundColor: "white" }}
							/>
						</div>
					</div>
					<div className="basis-1/5 border-l border-l-[#323232]">
						<SidebarHeader heading={"Images"} />
					</div>
				</div>
			</div>
		</ApplicationContext.Provider>
	);
}

export default Editor;
