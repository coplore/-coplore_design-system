import classNames from 'classnames';
import { forwardRef } from 'react';

import Box from '../Box';
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

	return (
		<Box ref={ref} as={as} className={className} {...rest}>
			{children}
		</Box>
	);
});

Flex.displayName = 'Flex';

export default Flex;
