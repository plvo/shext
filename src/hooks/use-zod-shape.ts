'use client';

import { ZodObject, type ZodRawShape } from 'zod';

export default function UseZodShape<T extends ZodObject<ZodRawShape>, U extends Record<keyof ZodRawShape, unknown>>(
  zodSchema: T,
  data?: U,
) {
  const defaultValues = Object.keys(zodSchema.shape).reduce(
    (acc, key) => {
      acc[key] = data && data[key] !== undefined ? data[key] : '';
      return acc;
    },
    {} as Record<string, unknown>,
  );

  return defaultValues;
}
