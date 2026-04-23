import { ReactNode } from 'react';
import { LinkProps } from 'next/link';
import { TBackgroundVariants, TVariant } from '../../types';

export interface IArrowLinkRootProps extends LinkProps {
  background?: TBackgroundVariants;
  variant?: TVariant;
  children: ReactNode;
  className?: string;
}
