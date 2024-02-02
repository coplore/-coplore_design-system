import Box from '@coplore/react-ui/src/components/Box';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Box> = {
	title: 'Layouts/Box',
	component: Box,
	tags: ['autodocs']
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlexStory: Story = {
	args: {
		children: 'Box'
	}
};
