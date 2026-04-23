import { cn } from '@/lib/utils';

import type { IServiceCardContentProps } from './types';

export function Content({ children, className }: IServiceCardContentProps) {
  return (
    <div className={cn('h-full flex flex-col justify-between', className)}>
      {children}
    </div>
  );
}
