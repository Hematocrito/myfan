import { ChangeEvent } from 'react';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormControlProps } from './interfaces/forms';

export const useFormControl: FormControl = ([
  val,
  validators = [],
]: FormControlProps) => {
  const state$ = new BehaviorSubject({
    value: val,
    touched: false,
    invalid: true,
  });

  const onChange = (e: ChangeEvent<any>) => {
    const { value } = e.target;
    const results = validators.map((fn) => fn(value)).includes(false);
    state$.next({ ...state$.value, value, invalid: results });
  };

  const onBlur = (e: ChangeEvent<any>) =>
    state$.next({ ...state$.value, touched: true });
  const setValue = (value: any) => state$.next({ ...state$.value, value });

  return {
    state$,
    onChange,
    onBlur,
    setValue,
  };
};
