'use client';

import { z } from 'zod';
import { useZodForm } from 'shext';
import { Form } from '@/components/ui/form';
import InputField from '@/components/ui/shuip/input.form-field';
import { ButtonSubmit } from '@/components/ui/shuip/button.submit';

const userSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(50, 'Name must not exceed 50 characters'),
  pseudo: z
    .string()
    .min(3, 'Pseudo must be at least 3 characters')
    .max(20, 'Pseudo must not exceed 20 characters')
    .regex(/^[a-zA-Z0-9]+$/, 'Pseudo must not contain spaces or special characters'),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z.string().min(3, 'Phone number must be 3 digits'),
});

type User = z.infer<typeof userSchema>;

export default function Page() {
  const { form, formState, control, handleSubmit } = useZodForm(userSchema);

  const onSubmit = async (newData: User) => {
    console.log(newData);
  };

  return (
    <main className="flex flex-col item-center justify-center h-screen w-screen p-8">
      <div className="flex flex-col items-center justify-center w-full">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-400 rounded-xl w-96 space-y-8 p-4">
            <InputField
              control={control}
              name="name"
              label="Name"
              placeholder="Your name"
              type="text"
              autoComplete="name"
            />
            <InputField
              control={control}
              name="pseudo"
              label="Pseudo"
              placeholder="Your pseudo"
              type="text"
              autoComplete="username"
            />
            <InputField
              control={control}
              name="email"
              label="Email"
              placeholder="Your email"
              type="email"
              autoComplete="email"
            />
            <InputField
              control={control}
              name="phone"
              label="Phone"
              placeholder="Your phone"
              type="tel"
              autoComplete="tel"
            />
            <ButtonSubmit label={'Edit'} loading={formState.isSubmitting} onClick={() => {}} />
          </form>
        </Form>
      </div>
    </main>
  );
}
