module.exports = {
	extends: [
    '../../.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
	plugins: ['jsx-a11y'],
	settings: {
    react: {
      version: "detect"
    }
  },
	rules: {
		'react/react-in-jsx-scope': 'off'
	}
};
