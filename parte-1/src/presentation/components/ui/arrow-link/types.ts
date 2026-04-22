import type { VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import type { arrowLinkStyles } from './styles';

export type TArrowLinkBg = 'dark' | 'green' | 'transparent';
export type TArrowLinkIconBg = 'dark' | 'green' | 'none';

export interface IArrowLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof arrowLinkStyles> {
  children?: ReactNode;
}

export interface IArrowLinkIconProps {
  variant?: TArrowLinkIconBg;
  children: ReactNode;
}

export interface IArrowIconProps {
  iconColor?: 'dark' | 'white';
}
