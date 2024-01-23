import Flex from '@coplore/react-ui/src/components/Flex';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Flex> = {
	title: 'Layouts/Flex',
	component: Flex,
	tags: ['autodocs']
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlexStory: Story = {
	args: {}
};
