export class Script {
	constructor() {}
	init() {}
	execute(parameters: {}) {}
}

export type Metadata = {
	displayName: string;
	internalId: string;
	loadOrder: number;
	dependencies: string[];
	parameters: { [key: string]: string };
};
