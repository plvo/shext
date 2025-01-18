import { createContext, type ReactNode } from 'react';
import { Button } from 'src/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'src/components/ui/hover-card';

// export const _ComponentsContext = createContext<CustomComponents>({});

const defaultComponents: Required<CustomComponents> = {
  button: Button,
  dialog: {
    main: Dialog,
    subComponents: {
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogOverlay,
      DialogPortal,
      DialogTitle,
      DialogTrigger,
    },
  },
  'hover-card': {
    main: HoverCard,
    subComponents: {
      HoverCardContent,
      HoverCardTrigger,
    },
  },
};

export const _ComponentsContext = createContext<CustomComponents>(defaultComponents);

export const UComponentsProvider = ({
  children,
  components = {},
}: {
  children: ReactNode;
  components?: CustomComponents;
}) => {
  const mergedComponents = { ...defaultComponents, ...components };

  return <_ComponentsContext.Provider value={mergedComponents}>{children}</_ComponentsContext.Provider>;
};
