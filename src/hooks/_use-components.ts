import { useContext } from 'react';
import { _ComponentsContext } from 'src/providers/components.provider';
import type { ComponentAndSubComponents, ComponentsKey } from 'src/types/providers';

export const useCustomComponents = <T>(key: ComponentsKey): ComponentAndSubComponents<T> | null => {
  const customComponents = useContext(_ComponentsContext);
  const component = customComponents[key];

  if (!component) {
    return null;
  }

  console.log('nique ta mere la pute ', key, component);

  if (typeof component === 'function') {
    return { main: component, subComponents: {} };
  }

  return {
    main: component.main,
    subComponents: component.subComponents || {},
  };
};
