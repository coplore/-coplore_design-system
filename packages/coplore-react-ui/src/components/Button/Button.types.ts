import type { ComponentPropsWithRef } from 'react';

type ExtendsedType = ComponentPropsWithRef<'button'>;

export type ButtonProps = {
	/**
	 * - 버튼의 색상을 변경할 수 있습니다.
	 * - `default`, `gray`, `primary`, `secondary` 등 테마별로 값을 설정할 수 있습니다.
	 * @default default
	 */
	color?: 'default' | 'gray' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
} & ExtendsedType;
