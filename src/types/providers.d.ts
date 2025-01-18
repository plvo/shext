type ComponentsKey = 'button' | 'dialog' | 'hover-card';

type SubComponentsMap = {
  [key: string]: React.ComponentType<any>;
};

type ComponentAndSubComponents = {
  main: React.ComponentType<any>;
  subComponents?: SubComponentsMap;
};

type CustomComponents = {
  [K in ComponentsKey]?: React.ComponentType<any> | ComponentAndSubComponents;
};
