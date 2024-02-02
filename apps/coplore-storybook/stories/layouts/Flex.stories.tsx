import Box from '@coplore/react-ui/src/components/Box';
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
	args: {
		spacing: '25'
	},
	render: args => (
		<>
			<Flex {...args}>
				<Box border="sm" borderColor="black-opacity.70" width="20" height="20">
					item 1
				</Box>
				<Box border="sm" borderColor="black-opacity.70" width="20" height="20">
					item 2
				</Box>
				<Box border="sm" borderColor="black-opacity.70" width="20" height="20">
					item 3
				</Box>
			</Flex>
		</>
	)
};
