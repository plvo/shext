'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type DefaultValues, useForm } from 'react-hook-form';
import type { ZodObject, ZodRawShape, z } from 'zod';
import { useZodShape } from './use-zod-shape.js';

export interface UseShextFormProps<T extends ZodObject<ZodRawShape>, U> {
  zodSchema: T;
  data?: U;
  defaultValues?: z.infer<T>;
}

export function useShextForm<T extends ZodObject<ZodRawShape>, U extends Record<keyof ZodRawShape, unknown>>({
  zodSchema,
  data,
  defaultValues,
}: UseShextFormProps<T, U>) {
  const managedDefaultValues = defaultValues ?? (useZodShape(zodSchema, data) as z.infer<typeof zodSchema>);

  const form = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
    defaultValues: managedDefaultValues as DefaultValues<z.infer<typeof zodSchema>>,
  });

  return {
    form,
    control: form.control,
    handleSubmit: form.handleSubmit,
    formState: form.formState,
  };
}
