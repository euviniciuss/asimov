import { cn } from '@/lib/utils';

import { illustrationStyles } from './styles';
import type { IServiceCardIllustrationProps } from './types';

export function Illustration({
  children,
  className,
}: IServiceCardIllustrationProps) {
  return <div className={cn(illustrationStyles(), className)}>{children}</div>;
}
