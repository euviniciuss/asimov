import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import type { headingVariants } from './styles';

export type THeadingSize = 'h1' | 'h2' | 'h3';

export interface IHeadingProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  size?: THeadingSize;
  children: string;
}
