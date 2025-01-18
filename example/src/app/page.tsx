"use client";
import { ButtonSubmit } from '@plvo/next-utils';

export default function Home() {

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <ButtonSubmit onClick={() => {
        console.log('clicked');
      }}
        label={'Click me'}
      />
    </main>
  );
}
