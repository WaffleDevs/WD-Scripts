import { Metadata, Script } from "../scriptLoader/types";

const metadata: Metadata = {
	displayName: "",
	internalId: "",
	loadOrder: 10,
	dependencies: [],
	parameters: {
		text: "string",
	},
};

class CustomScript extends Script {
	init() {}

	execute(parameters: { [key: string]: any }): void {
		console.log(parameters.text);
	}
}
