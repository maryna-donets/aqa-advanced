import globals from "globals";
import jest from "eslint-plugin-jest";

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
			},
		},
		ignores: ["node_modules/"],

		plugins: {
			jest,
		},

		rules: {
			"no-unused-vars": "warn",
			curly: "error",
		},
	},
];
