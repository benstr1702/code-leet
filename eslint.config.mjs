import globals from "globals";

/** @type {import('eslint').Linter.Config} */
export default {
	files: ["**/*.js"],

	languageOptions: {
		sourceType: "commonjs",
		globals: globals.browser,
	},

	rules: {
		"no-unused-vars": "warn", // Change unused vars from "error" to "warn"
	},
};
