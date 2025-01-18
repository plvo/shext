'use client';

import { Button } from '@/components/ui/button';
import { DialogConfirmation, ButtonSubmit } from '@plvo/next-utils';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div>
        <ButtonSubmit
          onClick={() => {
            console.log('clicked');
          }}
          label={'Click me'}
        />

        {/* <DialogConfirmation
          trigger={<Button variant={'success'}>Open Confirmation Dialog</Button>}
          title={'Confirmation'}
          description={'Are you sure you want to continue?'}
          labelConfirmButton={'Yes'}
          onConfirm={() => {
            console.log('confirmed');
          }}
        /> */}
      </div>
    </main>
  );
}
