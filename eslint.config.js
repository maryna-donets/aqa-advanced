import globals from "globals";

export default [
	{ languageOptions: { globals: globals.browser } },
	{
		ignores: ["node_modules/"],
	},
	{
		rules: {
			"no-unused-vars": "warn",
			curly: "error",
		},
	},
];
