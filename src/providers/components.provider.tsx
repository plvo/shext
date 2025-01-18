"use client";

import { createContext, type ReactNode } from 'react';
import type { CustomComponents } from 'src/types/providers';

export const _ComponentsContext = createContext<CustomComponents>({});

export const UComponentsProvider = ({
  children,
  customComponents = {},
}: {
  children: ReactNode;
  customComponents?: CustomComponents;
}) => {
  console.log("bonjour");
  console.log('customComponents', customComponents);
  return <_ComponentsContext.Provider value={customComponents}>
    {children}</_ComponentsContext.Provider>;
};
