import { createContext, useContext } from 'react';

import type { TBackgroundCardVariants } from './types';

interface IServiceCardContext {
  background: TBackgroundCardVariants;
}

const ServiceCardContext = createContext<IServiceCardContext | null>(null);

export function useServiceCard() {
  const context = useContext(ServiceCardContext);

  if (!context) {
    throw new Error('Use within ServiceCard.Root');
  }

  return context;
}

export default ServiceCardContext;
