import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import type { BoxProps } from './Box.types';

const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
	const {
		as = 'div',
		bgColor,
		border,
		borderBottomRadius,
		borderColor,
		borderLeftRadius,
		borderRadius,
		borderRightRadius,
		borderTopRadius,
		bottom,
		boxShadow,
		children,
		className: classNameProp,
		color,
		cursor,
		display,
		height,
		left,
		margin,
		marginBottom,
		marginLeft,
		marginRight,
		marginTop,
		maxHeight,
		maxWidth,
		minHeight,
		minWidth,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		pointerEvents,
		position,
		right,
		top,
		translateX,
		translateY,
		width,
		zIndex,
		...rest
	} = props;

	const className = classNames(
		'box',
		bgColor && `box__bg-color--${bgColor.replace('.', '-')}`,
		border && `box__border--${border}`,
		borderBottomRadius && `box__border-bottom-radius--${borderBottomRadius}`,
		borderColor && `box__border-color--${borderColor}`,
		borderLeftRadius && `box__border-left-radius--${borderLeftRadius}`,
		borderRadius && `box__border-radius--${borderRadius}`,
		borderRightRadius && `box__border-right-radius--${borderRightRadius}`,
		borderTopRadius && `box__border-top-radius--${borderTopRadius}`,
		bottom && `box__bottom--${bottom}`,
		boxShadow && `box__shadow--${boxShadow}`,
		color && `box__color--${color.replace('.', '-')}`,
		cursor && `box__cursor--${cursor}`,
		display && `box__display--${display}`,
		height && `box__height--${height}`,
		left && `box__left--${left}`,
		margin && `box__m--${margin}`,
		marginBottom && `box__mb--${marginBottom}`,
		marginLeft && `box__ml--${marginLeft}`,
		marginRight && `box__mr--${marginRight}`,
		marginTop && `box__mt--${marginTop}`,
		maxHeight && `box__max-height--${maxHeight}`,
		maxWidth && `box__max-width--${maxWidth}`,
		minHeight && `box__min-height--${minHeight}`,
		minWidth && `box__min-width--${minWidth}`,
		padding && `box__p--${padding}`,
		paddingBottom && `box__pb--${paddingBottom}`,
		paddingLeft && `box__pl--${paddingLeft}`,
		paddingRight && `box__pr--${paddingRight}`,
		paddingTop && `box__pt--${paddingTop}`,
		pointerEvents && `box__pointer-events--${pointerEvents}`,
		position && `box__position--${position}`,
		right && `box__right--${right}`,
		top && `box__top--${top}`,
		translateX && `box__translate-x--${translateX}`,
		translateY && `box__translate-y--${translateY}`,
		width && `box__width--${width}`,
		zIndex && `box__z-index--${zIndex}`,
		classNameProp && classNameProp
	);

	const elementProps = {
		...rest,
		ref,
		className
	};

	return createElement(as, elementProps, children);
});

Box.displayName = 'Box';

export default Box;
