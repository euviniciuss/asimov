import { cn } from '@/lib/utils';

import { ArrowIcon, ArrowLinkIcon } from './components/arrow-link-icon';
import { arrowLinkStyles } from './styles';
import type { IArrowLinkProps, TArrowLinkBg } from './types';

function ArrowLinkRoot({
  className,
  background = 'transparent',
  children,
  ...props
}: IArrowLinkProps) {
  return (
    <a className={cn(arrowLinkStyles({ background }), className)} {...props}>
      {children}
    </a>
  );
}

function ArrowLinkIconCompound({
  className,
  variant,
  children,
}: {
  className?: string;
  variant?: 'dark' | 'green' | 'none';
  children?: React.ReactNode;
}) {
  return (
    <ArrowLinkIcon variant={variant} className={className}>
      {children}
    </ArrowLinkIcon>
  );
}

function ArrowLinkTextCompound({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={className}>{children}</span>;
}

export const ArrowLink = Object.assign(ArrowLinkRoot, {
  Icon: ArrowLinkIconCompound,
  Text: ArrowLinkTextCompound,
});

export type { TArrowLinkBg };
export { ArrowIcon, ArrowLinkIcon };
