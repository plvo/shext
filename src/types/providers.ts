type ComponentsKey = 'button' | 'dialog' | 'hover-card';

type SubComponentsMap<T> = {
  [key: string]: T;
};

type ComponentAndSubComponents<T> = {
  main: T;
  subComponents?: SubComponentsMap<T>;
};

type CustomComponents<T> = Partial<Record<ComponentsKey, T | ComponentAndSubComponents<T>>>;

export type { ComponentsKey, SubComponentsMap, ComponentAndSubComponents, CustomComponents };
