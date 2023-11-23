import DashboardNav from "@src/components/DashboardNav/DashboardNav";
import React, { useState } from "react";
import Toggle, { Tabs } from "./components/Toggle/Toggle";
import DashboardActions from "./action/DashboardActions";

function Dashboard() {
	const [state, setState] = useState<Dashboard.State>({
		tabs: "panel",
		loading: {},
	});

	const actions = new DashboardActions(state, setState);

	return (
		<div className="bg-darkGray min-h-screen min-w-full w-full">
			<DashboardNav />
			<div className="flex px-[80px]">
				<div className="basis-3/12 pr-3">
					<Toggle
						setTab={function (tab: Tabs): void {
							actions.setTab(tab);
						}}
						currentTab={state.tabs}
					/>
				</div>
				<div className="basis-9/12 pl-3"></div>
			</div>
		</div>
	);
}

export default Dashboard;
