import type { CSSProperties, ElementType } from 'react';

import type { CoploreSpacing } from '../../types';
import type { BoxProps } from '../Box';

export interface FlexProps extends BoxProps {
	as?: ElementType;

	/**
	 * - Flex 아이템들을 수직 정렬하는 방향을 설정합니다.
	 * @default 'stretch'
	 */
	align?: CSSProperties['alignItems'];

	/**
	 * - Flex 아이템의 초기 크기를 설정합니다.
	 * @default 'auto'
	 */
	basis?: CSSProperties['flexBasis'];

	/**
	 * - Flex 아이템들을 배치할 때 사용할 주 축의 방향을 설정합니다.
	 * @default 'row'
	 */
	direction?: CSSProperties['flexDirection'];

	/**
	 * - Flex 아이템의 증가 여부를 설정합니다.
	 * @default 0
	 */
	grow?: CSSProperties['flexGrow'];

	/**
	 * - Flex 아이템들을 주 축에서 어떻게 정렬할지를 설정합니다.
	 * @default 'flex-start'
	 */
	justify?: CSSProperties['justifyContent'];

	/**
	 * - Flex 아이템의 감소 여부를 설정합니다.
	 * @default 1
	 */
	shrink?: CSSProperties['flexShrink'];

	/**
	 * - Flex 아이템들을 여러 줄로 나눌지 여부를 설정합니다.
	 * @default 'nowrap'
	 */
	wrap?: CSSProperties['flexWrap'];

	/**
	 * - Flex 아이템들 간의 간격을 설정합니다.
	 * - spacing 단위로 설정이 가능합니다.
	 * @default 0
	 */
	spacing?: CoploreSpacing;
}
