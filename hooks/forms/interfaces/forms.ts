import { ChangeEvent, FormEvent, RefObject } from "react";
import { BehaviorSubject, Observable } from "rxjs";

export interface FormData {
  value: any;
  invalid: boolean;
  touched: boolean;
}

export interface FormGroupData {
  get(name: string): FormControlData;
  isInvalid: () => boolean;
  handleSubmit: (callback: Function) => (ev: FormEvent<any>) => void;
  value: any;
  valueChanges$: Observable<any>;
}

export interface FormControlData {
  onChange(e: ChangeEvent<any>): void;
  onBlur(e: ChangeEvent<any>): void;
  setValue(val: any): void;
  state$: BehaviorSubject<FormData>;
}

export type FormGroupProps = { [key: string]: FormControlData };

export type FormGroup = (
  props: FormGroupProps,
  ...validators: [control: string, validators: GroupValidator[]][]
) => FormGroupData;
export type FormControl = (props: FormControlProps) => FormControlData;

export type GroupValidator = (
  get: (name: string) => FormControlData,
  set: (name: string, value: boolean) => void
) => void;
export type Validator = (value: string | number | boolean) => boolean;

export type FormControlProps = [
  value: string | number | boolean,
  validators?: Validator[]
];

export type FormBuilderProps = {
  [key: string]: [value: string | string | boolean, validators?: Validator[]];
};
