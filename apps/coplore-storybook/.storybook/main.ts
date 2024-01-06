import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx', //
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
	],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-interactions')
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	},
	async viteFinal(config) {
		return {
			...config,
			define: { 'process.env': {} },
			resolve: {
				alias: [
					{
						find: '@coplore/react-ui',
						replacement: resolve(__dirname, '../../../packages/coplore-react-ui/')
					}
				]
			}
		};
	},
	docs: {
		autodocs: 'tag'
	},
	typescript: {
		check: false,
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false
			},
			propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
		}
	}
};
export default config;
