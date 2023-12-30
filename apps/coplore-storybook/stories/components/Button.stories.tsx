import { Button } from '@coplore/react-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
	args: {}
};
