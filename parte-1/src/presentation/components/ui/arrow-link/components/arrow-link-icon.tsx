import { ArrowRight } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { arrowLinkIconStyles } from '../styles';
import type { TArrowLinkIconBg } from '../types';

interface IArrowLinkIconProps extends ComponentProps<'span'> {
  variant?: TArrowLinkIconBg;
  children: ReactNode;
}

export function ArrowLinkIcon({
  className,
  variant = 'none',
  children,
  ...props
}: IArrowLinkIconProps) {
  return (
    <span
      className={cn(arrowLinkIconStyles({ variant }), className)}
      {...props}
    >
      {children}
    </span>
  );
}

interface IArrowIconProps {
  className?: string;
  iconColor?: 'dark' | 'white';
}

export function ArrowIcon({ className, iconColor = 'dark' }: IArrowIconProps) {
  return (
    <ArrowRight
      className={cn(
        'w-5 h-5',
        iconColor === 'white' ? 'text-white' : 'text-black',
        className,
      )}
    />
  );
}
