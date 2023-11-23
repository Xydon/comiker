export default class AsyncStateClass<T = any> {
	private state: AsyncState = {
		status: "dormant",
		message: "",
	};

	isLoading(): boolean {
		return this.state.status === 'initialized';
	}
	isDormant(): boolean {
		return this.state.status === 'dormant';
	}
	isInitialized(): boolean {
		return this.isLoading();
	}
	isSuccess(): boolean {
		return this.state.status === 'success';
	}
	hasFailed(): boolean {
		return this.state.status === 'failed';
	}
	getMessage(): string {
		return this.state.message;
	}
	getMeta(): T {
		return this.state.meta;
	}
	getStatus(): AsyncStatus {
		return this.state.status;
	}
}
