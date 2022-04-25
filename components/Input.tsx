import { FormGroupData } from 'hooks';
import { MdSearch } from 'react-icons/md';
import { createRef, useEffect, useState } from 'react';

interface InputProps {
  formGroup: FormGroupData;
  name: string;
  children: [string, string];
  type?: 'text' | 'email' | 'password' | 'search';
  mode?: 'light';
  color?: 'white';
}

export const Input = ({
  name,
  formGroup,
  children,
  type,
  mode,
  color,
}: InputProps) => {
  const { state$, ...input } = formGroup.get(name);
  const [state, setState] = useState(state$.value);
  const [focus, setFocus] = useState(false);
  const ref = createRef<HTMLInputElement>();

  useEffect(() => {
    const sub$ = state$.subscribe((s) => setState(s));
    return () => sub$.unsubscribe();
  }, [state$.value]);

  const typeInput = name === 'password' ? 'password' : type ? type : 'text';

  const handleBlur = () => {
    setFocus(false);
    input.onBlur({} as any);
  };
  const handleFocus = () => {
    setFocus(true);
    ref.current?.focus();
  };

  return (
    <div
      className={`my-3 relative
        ${mode === 'light' && type !== 'search' && 'pt-3'}
      `}
    >
      <label
        onClick={handleFocus}
        className={`px-1 text-xs transition-all duration-300 
        ${color === 'white' && 'text-white'} 
        ${!state.touched && mode !== 'light' && !state.invalid && 'text-black'} 
        ${mode === 'light' && !state.value && 'text-gray-500'} 
        ${state.invalid && state.touched && 'text-red-600'} 
        ${!children[0] && 'hidden'} 
        ${mode !== 'light' && 'text-xs'} 
        ${mode === 'light' && type !== 'search' && 'absolute top-0 text-xs'} 
        ${
          !focus &&
          !state.value &&
          mode === 'light' &&
          type !== 'search' &&
          'top-1/3 text-base'
        }`}
      >
        {children[0]}
      </label>
      <div
        className={`flex items-center w-full
          ${focus && mode !== 'light' && 'ring-2'}
          ${!state.touched && 'border-blue-450'}
          ${!state.invalid && 'border-blue-450 ring-blue-150'}
          ${
            state.invalid &&
            state.touched &&
            type !== 'search' &&
            'border-red-500 ring-red-300'
          }
          ${type === 'search' && 'border-blue-450 '}
          ${mode !== 'light' && 'border rounded-3xl px-2 py-1'}
          ${
            mode === 'light' &&
            type !== 'search' &&
            'border-b bg-transparent px-1 pt-2'
          }
          ${color === 'white' && 'border border-white rounded-3xl px-2 py-1'}
        `}
      >
        <input
          className={`text-base font-medium outline-none flex-1 appearance-none 
            ${type === 'search' ? 'w-11/12' : 'w-full'}
            ${mode === 'light' ? 'bg-transparent' : 'bg-white'}
            ${
              color === 'white'
                ? 'placeholder:text-white text-white'
                : 'text-black'
            }
          `}
          ref={ref}
          type={typeInput}
          name={name}
          onChange={input.onChange}
          autoComplete="off"
          onFocus={() => setFocus(true)}
          onBlur={handleBlur}
          value={state.value}
          placeholder={type === 'search' ? 'Search anyting...' : ''}
        />
        <MdSearch
          className={`text-2xl font-bolder 
            ${type !== 'search' && 'hidden'} 
            ${color === 'white' && 'text-white'}
          `}
        ></MdSearch>
      </div>
      {state.invalid && state.touched && (
        <div
          className={`sm:px-1 text-xs text-red-500
            ${!children[1] && type === 'search' && 'hidden'} 
            ${mode === 'light' && 'absolute bottom-0'}
          `}
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};
