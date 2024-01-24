import { forwardRef } from 'react';
import type { BoxProps } from './Box.types';

const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
	const Component = 'div';

	return <div>Box</div>;
});

Box.displayName = 'Box';

export default Box;
