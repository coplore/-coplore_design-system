import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from 'react';

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

export type PolymorphicProps<T extends ElementType, Props = Record<string, unknown>> = {
	as?: T;
} & ComponentPropsWithoutRef<T> &
	Props & {
		ref?: PolymorphicRef<T>;
	};
