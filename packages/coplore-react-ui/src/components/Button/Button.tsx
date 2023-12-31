import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { color = 'default', children, ...rest } = props;

	return (
		<button ref={ref} {...rest}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
