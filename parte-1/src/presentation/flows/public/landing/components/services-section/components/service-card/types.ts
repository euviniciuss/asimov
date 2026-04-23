import type { ReactNode } from 'react';

export type TBackgroundCardVariants = 'light' | 'dark' | 'green';


export interface IServiceCardContentProps {
  children: ReactNode;
  className?: string;
}

export interface IServiceCardIllustrationProps {
  children?: ReactNode;
  className?: string;
}
