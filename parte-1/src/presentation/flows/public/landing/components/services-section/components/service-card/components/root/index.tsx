import { cn } from '@/lib/utils';

import { rootStyles } from './styles';
import type { IServiceCardRootProps } from './types';
import ServiceCardContext from '../../context';

export function Root({
  background = 'light',
  children,
  className,
}: IServiceCardRootProps) {
  return (
    <ServiceCardContext.Provider value={{ background }}>
      <div
        className={cn(
          rootStyles({ background }),
          className,
        )}
      >
        {children}
      </div>
    </ServiceCardContext.Provider>
  );
}
