import { cn } from '@/lib/utils';

import { cardDescriptionStyles, cardStyles, cardTitleStyles } from './styles';
import type { ICardProps, ICardTextProps } from './types';

export function Card({ className, ...props }: ICardProps) {
  return <article className={cn(cardStyles(), className)} {...props} />;
}

export function CardTitle({ children, className }: ICardTextProps) {
  return <h3 className={cn(cardTitleStyles(), className)}>{children}</h3>;
}

export function CardDescription({ children, className }: ICardTextProps) {
  return <p className={cn(cardDescriptionStyles(), className)}>{children}</p>;
}
