import classNames from 'classnames';
import { createElement, forwardRef } from 'react';

import type { FlexProps } from './Flex.types';

const Flex = forwardRef<HTMLElement, FlexProps>((props, ref) => {
	const {
		as = 'div',
		align,
		basis,
		children,
		className: classNameProp,
		direction,
		grow,
		justify,
		shrink,
		style,
		spacing,
		wrap,
		...rest
	} = props;

	const className = classNames(
		'flex',
		`flex__align--${align}`,
		`flex__basis--${basis}`,
		`flex__direction--${direction}`,
		`flex__grow--${grow}`,
		`flex__justify--${justify}`,
		`flex__shrink--${shrink}`,
		`flex__spacing--${spacing}`,
		`flex__wrap--${wrap}`,
		classNameProp && classNameProp
	);

	const elementProps = {
		...rest,
		ref,
		className,
		style
	};

	return createElement(as, elementProps, children);
});

Flex.displayName = 'Flex';

export default Flex;
