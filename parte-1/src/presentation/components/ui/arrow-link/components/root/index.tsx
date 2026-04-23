import Link from 'next/link';

import { cn } from '@/lib/utils';

import { rootStyles } from './styles';
import { IArrowLinkRootProps } from './types';
import ArrowLinkContext from '../../context';

export function Root({
  background = 'dark',
  variant = 'solid',
  children,
  className,
  ...props
}: IArrowLinkRootProps) {
  return (
    <ArrowLinkContext.Provider value={{ background, variant }}>
      <Link
        className={cn(rootStyles({ variant, background }), className)}
        {...props}
      >
        {children}
      </Link>
    </ArrowLinkContext.Provider>
  );
}
