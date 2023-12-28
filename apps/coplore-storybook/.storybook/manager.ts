import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
	base: 'dark'
	// brandTitle: '🎨 Coplore Design System | storybook app'
	// brandUrl: 'https://example.com',
	// brandImage: '...'
	// brandTarget: '_self',
});

addons.setConfig({
	theme
});
