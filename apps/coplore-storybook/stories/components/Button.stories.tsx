import Button from '@coplore/react-ui/src/components/Button';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * - 버튼을 사용하면 사용자가 작업을 수행하거나 선택할 수 있습니다.
 */
const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
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

/**
 * - 버튼 애니메이션 여부를 설정합니다.
 * - `default: false`
 */
export const NoAnimation: Story = {
	args: {
		...ButtonStory.args,
		noAnimation: true
	}
};

/**
 * - 버튼의 색상을 설정합니다.
 * - "primary", "secondary" 등 다양한 테마로 설정 가능합니다.
 * - `default: "primary"`
 */
export const Color: Story = {
	...ButtonStory,
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button color="primary" {...args} />
			<Button color="secondary" {...args} />
			<Button color="info" {...args} />
			<Button color="success" {...args} />
			<Button color="warning" {...args} />
			<Button color="error" {...args} />
			<Button color="ghost" {...args} />
		</>
	)
};

/**
 * - 버튼의 비활성화 여부입니다.
 * - `default: false`
 */
export const Disabled: Story = {
	args: {
		...ButtonStory.args,
		disabled: true
	},
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button color="primary" {...args} />
			<Button color="secondary" {...args} />
			<Button color="info" {...args} />
			<Button color="success" {...args} />
			<Button color="warning" {...args} />
			<Button color="error" {...args} />
			<Button color="ghost" {...args} />
		</>
	)
};

/**
 * - 버튼의 시작 또는 끝에 표시되는 아이콘입니다.
 * - `default: undefined`
 */
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

/**
 * - 버튼을 부모 컨테이너의 전체 너비로 확장할지 여부를 결정합니다.
 * - `default: false`
 */
export const FullWidth: Story = {
	args: {
		...ButtonStory.args,
		fullWidth: true
	}
};

/**
 * - 버튼이 현재 로딩 중인지 여부를 나타냅니다.
 * - `default: false`
 */
export const Loading: Story = {
	args: {
		...ButtonStory.args,
		loading: true
	},
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button color="primary" {...args} />
			<Button color="secondary" {...args} />
			<Button color="info" {...args} />
			<Button color="success" {...args} />
			<Button color="warning" {...args} />
			<Button color="error" {...args} />
			<Button color="ghost" {...args} />
		</>
	)
};

/**
 * - 버튼의 크기를 설정합니다.
 * - "lg"는 큰 크기, "sm"은 작은 크기 등으로 설정 가능합니다.
 * - `default: "md"`
 */
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

/**
 * - 버튼의 변형을 설정합니다.
 * - 'filled'는 꽉찬 스타일, 'outline'은 외곽선 스타일입니다.
 * - default: filled
 */
export const Variant: Story = {
	args: {
		...ButtonStory.args,
		variant: 'outline'
	},
	decorators: Story => (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Button color="primary" {...args} />
			<Button color="secondary" {...args} />
			<Button color="info" {...args} />
			<Button color="success" {...args} />
			<Button color="warning" {...args} />
			<Button color="error" {...args} />
			<Button color="ghost" {...args} />
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
