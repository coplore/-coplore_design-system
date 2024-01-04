import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {
		children: 'Button',
		color: 'default'
	},
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

export const ButtonStory: Story = {};
