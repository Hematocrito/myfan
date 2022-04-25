import { GroupValidator } from 'hooks';

export const passwordEquals =
  (pass1: string, pass2: string): GroupValidator =>
  (get, set) => {
    const control1 = get(pass1).state$.value;
    const control2 = get(pass2).state$.value;
    if (control1.value !== control2.value) return set(pass2, true);
    return set(pass2, false);
  };
