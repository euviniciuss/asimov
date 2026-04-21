import type { HTMLAttributes, ReactNode } from "react";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

export interface ICardTextProps {
  children: ReactNode;
  className?: string;
}
