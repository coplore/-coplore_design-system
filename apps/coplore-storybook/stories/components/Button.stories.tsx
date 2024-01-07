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
		children: 'Button'
	}
};

export const Color: Story = {
	...ButtonStory,
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button color="default" {...args} />
			<Button color="light" {...args} />
			<Button color="dark" {...args} />
			<Button color="ghost" {...args} />
			<Button color="primary" {...args} />
			<Button color="secondary" {...args} />
			<Button color="info" {...args} />
			<Button color="success" {...args} />
			<Button color="warning" {...args} />
			<Button color="error" {...args} />
		</>
	)
};

export const StartIconAndEndIcon: Story = {
	args: {
		...ButtonStory.args
	},
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button startIcon={<HeartIcon />} {...args} />
			<Button endIcon={<HeartIcon />} {...args} />
		</>
	)
};

export const FullWidth: Story = {
	args: {
		...ButtonStory.args,
		fullWidth: true
	}
};

export const Loading: Story = {
	args: {
		...ButtonStory.args,
		loading: true
	}
};

export const Shape: Story = {
	...ButtonStory,
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button shape="circle" {...args} />
			<Button shape="square" {...args} />
		</>
	)
};

export const Size: Story = {
	...ButtonStory,
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button size="xl" {...args} />
			<Button size="lg" {...args} />
			<Button size="md" {...args} />
			<Button size="sm" {...args} />
			<Button size="xs" {...args} />
		</>
	)
};

export const Variant: Story = {
	...ButtonStory,
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button variant="link" {...args} />
			<Button variant="outline" {...args} />
		</>
	)
};

const HeartIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
		/>
	</svg>
);
