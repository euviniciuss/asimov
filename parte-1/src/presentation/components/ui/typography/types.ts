import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode } from 'react';

import type { typographyColorStyles, typographyVariantStyles } from './styles';

export type TTypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

export interface ITypographyProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariantStyles>,
    VariantProps<typeof typographyColorStyles> {
  as?: TTypographyElement;
  children: ReactNode;
}
