'use client';

import { Button } from '../components/ui/button';
import { UComponentsProvider } from '@plvo/next-utils';

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <UComponentsProvider customComponents={{ button: Button }}>{children}</UComponentsProvider>;
}
