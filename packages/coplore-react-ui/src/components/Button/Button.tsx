import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, color, ...rest } = props;

	return (
		<button ref={ref} type="button" style={{ backgroundColor: 'royalblue' }} {...rest}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
