import { Validator } from 'hooks';

export const Required: Validator = (value) => {
  if (typeof value === 'string') return value.length > 0;
  if (typeof value === 'boolean') return true;
  if (typeof value === 'number') return true;
  return false;
};
