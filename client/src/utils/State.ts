export default class State<T>
{
	private value?: T;
	private waiters: ((value: T) => void)[];

	constructor (initial?: T)
	{
		this.value = initial;
		this.waiters = [];
	}

	public set(value: T): void
	{
		this.value = value;

		for (const waiter of this.waiters)
			waiter(value);
	}

	public get(): Promise<T>
	{
		const value = this.value;
		const promise = value !== undefined
			? new Promise<T>(resolve => resolve(value))
			: new Promise<T>((resolve) => this.waiters.push(resolve));
		
		return promise;
	}
}
