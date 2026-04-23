import { ReactNode } from "react";
import { TBackgroundCardVariants } from "../../types";

export interface IServiceCardRootProps {
  background?: TBackgroundCardVariants;
  children: ReactNode;
  className?: string;
}
