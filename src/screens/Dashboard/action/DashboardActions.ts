import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";

export default class DashboardActions extends ServerStateUtils<Dashboard.State> {
	setTab(tab: Dashboard.Tabs) {
		this.mutateState((v) => {
			v.tabs = tab;
		});
	}
}
