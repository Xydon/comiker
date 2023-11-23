import DashboardNav from "@src/components/DashboardNav/DashboardNav";
import React from "react";

function Dashboard() {
	return (
		<div className="min-h-screen bg-darkGray">
			<DashboardNav />
			<div className="px-[80px] flex w-full">
        <div className="basis-3/12 pr-3"></div>
        <div className="basis-9/12 pl-3"></div>
      </div>
		</div>
	);
}

export default Dashboard;
