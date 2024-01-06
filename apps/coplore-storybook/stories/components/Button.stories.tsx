import Button from '@coplore/react-ui/src/components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		ref: {
			table: {
				disable: true
			}
		},
		children: {
			table: {
				disable: true
			}
		}
	}
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
	args: {
		children: 'Button',
		color: 'default'
	}
};
