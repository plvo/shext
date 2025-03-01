'use client';

import UseZodShape from './use-zod-shape.js';
import { z, type ZodObject, type ZodRawShape } from 'zod';
import { useForm, type DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function useZodForm<T extends ZodObject<ZodRawShape>, U extends Record<keyof ZodRawShape, unknown>>(
  zodSchema: T,
  data?: U,
) {
  const defaultValues = UseZodShape(zodSchema, data) as z.infer<typeof zodSchema>;

  const form = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
    defaultValues: defaultValues as DefaultValues<z.infer<typeof zodSchema>>,
  });

  const { control, handleSubmit, formState } = form;

  return { form, control, handleSubmit, formState };
}
