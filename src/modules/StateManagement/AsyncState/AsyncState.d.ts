type AsyncStatus = "dormant" | "initialized" | "success" | "failed";
interface AsyncState<T = any> {
	status: AsyncStatus;
	message: string;
	meta?: T;
}
interface AsyncStateFactory<T> {
	status?: AsyncStatus;
	message?: string;
	meta?: T;
}
/**
 * @warning - don't use it as the root level state
 */
interface AsyncStateClass<T = any> {
	isLoading(): boolean;
	isDormant(): boolean;
	isInitialized(): boolean;
	isSuccess(): boolean;
	hasFailed(): boolean;
	getMessage(): string;
	getMeta(): T;
	getStatus(): AsyncStatus;

	setLoading();
	setDormant();
	setFailed();
	setSuccess();
	
}
