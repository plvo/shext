export const getChangedFields = <T extends Record<string, any>, U extends Partial<T>>(
  oldObject: T,
  newObject: U,
): Partial<T> => {
  const changedFields: Partial<T> = {};

  Object.keys(newObject).forEach((key) => {
    if (newObject[key] !== oldObject[key]) {
      (changedFields as any)[key] = newObject[key];
    }
  });

  return changedFields;
};
