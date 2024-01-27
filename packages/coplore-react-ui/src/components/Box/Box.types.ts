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
	as?: ElementType;
	bgColor?: ColorPalette;
	color?: ColorPalette;
	cursor?: CoploreCursor;
	display?: CoploreDisplay;
	height?: CoploreSize;
	margin?: CoploreSpacing;
	marginBottom?: CoploreSpacing;
	marginLeft?: CoploreSpacing;
	marginRight?: CoploreSpacing;
	marginTop?: CoploreSpacing;
	maxHeight?: CoploreSize;
	maxWidth?: CoploreSize;
	minHeight?: CoploreSize;
	minWidth?: CoploreSize;
	padding?: CoploreSpacing;
	paddingBottom?: CoploreSpacing;
	paddingLeft?: CoploreSpacing;
	paddingRight?: CoploreSpacing;
	paddingTop?: CoploreSpacing;
	pointerEvents?: CoplorePointerEvents;
	position?: CoplorePosition;
	width?: CoploreSize;
	zIndex?: CoploreZIndex;

	// new
	border?: 'none' | ThemeSize;
	borderColor?: ColorPalette;
	borderRadius?: 'none' | ThemeSize | 'full';
	borderTopRadius?: 'none' | ThemeSize | 'full';
	borderRightRadius?: 'none' | ThemeSize | 'full';
	borderBottomRadius?: 'none' | ThemeSize | 'full';
	borderLeftRadius?: 'none' | ThemeSize | 'full';
	top?: CoploreSpacing | '0%' | '50%' | '100%';
	right?: CoploreSpacing | '0%' | '50%' | '100%';
	bottom?: CoploreSpacing | '0%' | '50%' | '100%';
	left?: CoploreSpacing | '0%' | '50%' | '100%';
}
