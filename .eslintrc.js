module.exports = {
	extends: ["expo", "prettier", "plugin:react/recommended"],
	plugins: ["prettier", "react"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"react/jsx-uses-vars": "error",
		"react/jsx-uses-react": "error",
		"eslint-comments/disable-enable-pair": "off",
	},
};
