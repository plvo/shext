"use client"

import { ButtonSubmit } from '@plvo/next-utils';

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <ButtonSubmit
        onClick={() => {
          console.log('Button clicked');
        }}
        label={'Click me'}
      />
    </main>
  );
}
