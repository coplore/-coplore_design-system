module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
    sourceType: "module",
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname
	},
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: [
    '@typescript-eslint'
  ],
	ignorePatterns: [
		"**/scripts/*.js"
	],
	rules: {}
};
