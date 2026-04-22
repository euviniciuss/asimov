import { clsx } from 'clsx';

import { typographyColorStyles, typographyVariantStyles } from './styles';
import type { ITypographyProps, TTypographyElement } from './types';

export function Typography({
  as = 'p',
  variant = 'p',
  color = 'dark',
  className,
  children,
  ...props
}: ITypographyProps) {
  const Component = as as TTypographyElement;

  return (
    <Component
      className={clsx(
        typographyVariantStyles({ variant }),
        typographyColorStyles({ color }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
