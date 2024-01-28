import type { ElementType, HTMLAttributes } from 'react';
import type {
	ColorPalette,
	CoploreCursor,
	CoploreDisplay,
	CoplorePointerEvents,
	CoplorePosition,
	CoploreSize,
	CoploreSpacing,
	CoploreZIndex,
	ThemeSize
} from '../../types';

type DefaultProps = Omit<HTMLAttributes<HTMLElement>, 'as'>;

export interface BoxProps extends DefaultProps {
	/**
	 * - 컴포넌트의 렌더링을 지정할 React 엘리먼트 타입입니다.
	 * @default 'div'
	 */
	as?: ElementType;

	/**
	 * - 배경 색상을 설정합니다.
	 * @default undefined
	 */
	bgColor?: ColorPalette;

	/**
	 * - 테두리의 크기를 설정합니다.
	 * @default undefined
	 */
	border?: ThemeSize | 'none';

	/**
	 * - 하단 테두리의 반지름을 설정합니다.
	 * @default undefined
	 */
	borderBottomRadius?: ThemeSize | 'none' | 'full';

	/**
	 * - 테두리 색상을 설정합니다.
	 * @default undefined
	 */
	borderColor?: ColorPalette;

	/**
	 * - 왼쪽 테두리의 반지름을 설정합니다.
	 * @default undefined
	 */
	borderLeftRadius?: ThemeSize | 'none' | 'full';

	/**
	 * - 테두리의 전체 반지름을 설정합니다.
	 * @default undefined
	 */
	borderRadius?: ThemeSize | 'none' | 'full';

	/**
	 * - 오른쪽 테두리의 반지름을 설정합니다.
	 * @default undefined
	 */
	borderRightRadius?: ThemeSize | 'none' | 'full';

	/**
	 * - 상단 테두리의 반지름을 설정합니다.
	 * @default undefined
	 */
	borderTopRadius?: ThemeSize | 'none' | 'full';

	/**
	 * - Box 컴포넌트의 하단 위치를 설정합니다.
	 * @default undefined
	 */
	bottom?: 'start' | 'center' | 'end';

	/**
	 * - Box 컴포넌트의 그림자를 설정합니다.
	 * @default undefined
	 */
	boxShadow?: ThemeSize | 'none';

	/**
	 * - 텍스트 색상을 설정합니다.
	 * @default undefined
	 */
	color?: ColorPalette;

	/**
	 * - 마우스 커서 스타일을 설정합니다.
	 * @default undefined
	 */
	cursor?: CoploreCursor;

	/**
	 * - 컴포넌트의 표시 방법을 설정합니다.
	 * @default undefined
	 */
	display?: CoploreDisplay;

	/**
	 * - 컴포넌트의 높이를 설정합니다.
	 * @default undefined
	 */
	height?: CoploreSize;

	/**
	 * - Box 컴포넌트의 왼쪽 위치를 설정합니다.
	 * @default undefined
	 */
	left?: 'start' | 'center' | 'end';

	/**
	 * - 외부 여백을 설정합니다.
	 * @default undefined
	 */
	margin?: CoploreSpacing;

	/**
	 * - 하단 외부 여백을 설정합니다.
	 * @default undefined
	 */
	marginBottom?: CoploreSpacing;

	/**
	 * - 왼쪽 외부 여백을 설정합니다.
	 * @default undefined
	 */
	marginLeft?: CoploreSpacing;

	/**
	 * - 오른쪽 외부 여백을 설정합니다.
	 * @default undefined
	 */
	marginRight?: CoploreSpacing;

	/**
	 * - 상단 외부 여백을 설정합니다.
	 * @default undefined
	 */
	marginTop?: CoploreSpacing;

	/**
	 * - 컴포넌트의 최대 높이를 설정합니다.
	 * @default undefined
	 */
	maxHeight?: CoploreSize;

	/**
	 * - 컴포넌트의 최대 너비를 설정합니다.
	 * @default undefined
	 */
	maxWidth?: CoploreSize;

	/**
	 * - 컴포넌트의 최소 높이를 설정합니다.
	 * @default undefined
	 */
	minHeight?: CoploreSize;

	/**
	 * - 컴포넌트의 최소 너비를 설정합니다.
	 * @default undefined
	 */
	minWidth?: CoploreSize;

	/**
	 * - 내부 여백을 설정합니다.
	 * @default undefined
	 */
	padding?: CoploreSpacing;

	/**
	 * - 하단 내부 여백을 설정합니다.
	 * @default undefined
	 */
	paddingBottom?: CoploreSpacing;

	/**
	 * - 왼쪽 내부 여백을 설정합니다.
	 * @default undefined
	 */
	paddingLeft?: CoploreSpacing;

	/**
	 * - 오른쪽 내부 여백을 설정합니다.
	 * @default undefined
	 */
	paddingRight?: CoploreSpacing;

	/**
	 * - 상단 내부 여백을 설정합니다.
	 * @default undefined
	 */
	paddingTop?: CoploreSpacing;

	/**
	 * - 마우스 이벤트 허용 여부를 설정합니다.
	 * @default undefined
	 */
	pointerEvents?: CoplorePointerEvents;

	/**
	 * - 컴포넌트의 위치를 설정합니다.
	 * @default undefined
	 */
	position?: CoplorePosition;

	/**
	 * - Box 컴포넌트의 오른쪽 위치를 설정합니다.
	 * @default undefined
	 */
	right?: 'start' | 'center' | 'end';

	/**
	 * - Box 컴포넌트의 상단 위치를 설정합니다.
	 * @default undefined
	 */
	top?: 'start' | 'center' | 'end';

	/**
	 * - 가로 축으로 이동하는 정도를 설정합니다.
	 * @default undefined
	 */
	translateX?: 'center';

	/**
	 * - 세로 축으로 이동하는 정도를 설정합니다.
	 * @default undefined
	 */
	translateY?: 'center';

	/**
	 * - 컴포넌트의 너비를 설정합니다.
	 * @default undefined
	 */
	width?: CoploreSize;

	/**
	 * - 컴포넌트의 Z-축 순서를 설정합니다.
	 * @default undefined
	 */
	zIndex?: CoploreZIndex;
}
