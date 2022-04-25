import ca from 'date-fns/esm/locale/ca/index.js';
import { FormEvent, useEffect, useRef } from 'react';
import {
  combineLatest,
  debounceTime,
  map,
  Observable,
  take,
  throttleTime,
} from 'rxjs';
import {
  FormControlData,
  FormGroup,
  FormGroupData,
  FormGroupProps,
} from './interfaces/forms';

export const useFormGroup: FormGroup = (
  props: FormGroupProps,
  ...validators
): FormGroupData => {
  const group = useRef(props);

  const formChange$ = combineLatest(
    Object.entries(group.current).map(([_, control]) => control.state$)
  );
  const valueChanges$ = formChange$;

  const value = () =>
    Object.entries(group.current).reduce((prev, [key, control]) => {
      prev[key] = control.state$.value.value;
      return prev;
    }, {} as any);

  const isInvalid = () =>
    Object.entries(group.current)
      .map(([key, control]) => control.state$.value.invalid)
      .includes(true);

  const get = (name: string): FormControlData => {
    return group.current[name];
  };

  const setInvalid = (name: string, invalid: boolean) => {
    const state$ = get(name).state$;
    state$.next({ ...state$.value, invalid });
  };

  const controlChange = (name: string): Observable<any> => get(name).state$;
  const runValidators = () =>
    validators.map(([name, validatorsControl]) =>
      validatorsControl.map((fn) => fn(get, setInvalid))
    );

  useEffect(() => {
    const sub$ = validators.map(([name, validatorsControl]) =>
      controlChange(name).subscribe(() =>
        validatorsControl.map((fn) => fn(get, setInvalid))
      )
    );
    return () => {
      sub$.map((s) => s.unsubscribe());
    };
  }, []);

  const handleSubmit =
    (callback: Function) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      runValidators();
      callback(value());
    };

  return {
    valueChanges$,
    value,
    isInvalid,
    get,
    handleSubmit,
  };
};
