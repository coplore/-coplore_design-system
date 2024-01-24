import { CSSProperties } from 'react';

export type BoxProps = {
	// color
	color?: string;
	bgColor?: string;

	// width
	width?: string;
	minWidth?: string;
	maxWidth?: string;

	// height
	height?: string;
	minHeight?: string;
	maxHeight?: string;

	// margin
	m?: string;
	mt?: string;
	mr?: string;
	mb?: string;
	ml?: string;
	mx?: string;
	my?: string;

	// padding
	p?: string;
	pt?: string;
	pr?: string;
	pb?: string;
	pl?: string;
	px?: string;
	py?: string;

	// css attr
	display?: CSSProperties['display'];
	position?: CSSProperties['position'];
	zIndex?: CSSProperties['zIndex'];
	cursor?: CSSProperties['cursor'];
	pointerEvents?: CSSProperties['pointerEvents'];
};
