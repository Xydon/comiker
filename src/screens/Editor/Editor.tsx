import React, { useContext, useState } from "react";
import EditorNavBar from "./components/EditorNavBar/EditorNavBar";
import SidebarHeader from "./components/SidebarHeader/SidebarHeader";
import Artboard from "./components/Artboard/Artboard";
import useWidth from "@src/modules/hooks/useWidth";
import useHeight from "@src/modules/hooks/useHeight";
import { EditorTypes } from "./types";
import EditorActions from "./actions/EditorActions";
import {
	CircleComponentList,
	ImageComponentList,
	RectComponentList,
	TextComponentList,
} from "./components/ComponentList/ComponentList";
import ImageBar from "./components/ImageBar/ImageBar";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import TextEditActions from "./actions/TextEditActions";
import TextToolbar from "./components/Toolbars/TextToolbar/TextToolbar";
import EmptyToolbar from "./components/Toolbars/EmptyToolbar/EmptyToolbar";
import RectEditActions from "./actions/RectEditActions";
import RectToolbar from "./components/Toolbars/RectToolbar/RectToolbar";

interface ApplicationContextTypes {
	state: EditorTypes.State;
	actions: EditorActions;
	textToolbarActions: TextEditActions;
	rectToolbarActions: RectEditActions;
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
		image: {},
		prompt: "",
		imgSrc: {},
		loading: {
			fetchImage: AsyncStateFactory(),
		},
	});

	const actions = new EditorActions(state, setState);
	const textToolbarActions = new TextEditActions(state, setState);
	const rectToolbarActions = new RectEditActions(state, setState);

	return (
		<ApplicationContext.Provider
			value={{ state, actions, textToolbarActions, rectToolbarActions }}
		>
			<div className="bg-black flex flex-col w-screen h-screen overflow-hidden">
				<div className="border-b border-b-[#323232]" ref={navbarHeight.ref}>
					<EditorNavBar />
				</div>
				<div className="w-full flex grow">
					<div className="basis-1/5 border-r border-r-[#323232]">
						<div className="mb-4">
							<SidebarHeader heading={"Element"} />
						</div>
						<div>
							{actions.clubElements().map((v) => {
								if (v.type === "ellipse")
									return (
										<CircleComponentList
											onClick={() => {
												actions.setSelection({ id: v.id, shape: "ellipse" });
											}}
											key={v.id}
											id={v.id}
											color={v.color}
										/>
									);
								else if (v.type === "rectangle") {
									return (
										<RectComponentList
											onClick={() => {
												actions.setSelection({ id: v.id, shape: "rectangle" });
											}}
											key={v.id}
											id={v.id}
											color={v.color}
										/>
									);
								} else if (v.type === "text") {
									return (
										<TextComponentList
											onClick={() => {
												actions.setSelection({ id: v.id, shape: "text" });
											}}
											key={v.id}
											id={v.id}
											color={v.color}
										/>
									);
								} else if (v.type === "image") {
									return (
										<ImageComponentList
											onClick={() => {
												actions.setSelection({ id: v.id, shape: "image" });
											}}
											id={v.id}
											color={v.color}
										/>
									);
								}
							})}
						</div>
					</div>
					<div className="basis-3/5" ref={widthHandle.ref}>
						<div className="flex" ref={toolbarHeight.ref}>
							<SidebarHeader heading={"toolbar"} />
							{!state.selected && <EmptyToolbar />}
							{state.selected && state.selected.shape === "text" && (
								<TextToolbar />
							)}
							{state.selected && state.selected.shape === "rectangle" && (
								<RectToolbar />
							)}
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
								width={widthHandle.width * 0.95}
								height={800}
								style={{ backgroundColor: "white" }}
							/>
						</div>
					</div>
					<div className="basis-1/5 border-l border-l-[#323232]">
						<ImageBar />
					</div>
				</div>
			</div>
		</ApplicationContext.Provider>
	);
}

export default Editor;
