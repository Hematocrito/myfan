import { FormGroupData } from 'hooks';
import { useEffect, useState } from 'react';

interface InputProps {
  register: any;
  errors: any;
  fieldName: String;
  children: string | any;
}

export const Checkbox = ({
  register,
  fieldName,
  errors,
  children,
}: InputProps) => {
  return (
    <>
      <div className="flex items-start justify-between py-1">
        <div className="flex items-center justify-center p-[.2em]">
          <input type="checkbox" {...register(fieldName)} />
        </div>
        <span className="ml-2 flex-1 text-xs text-gray-900">{children}</span>
      </div>
      <span className="sm:px-1 text-xs text-red-500">
        {errors[`${fieldName}`]?.message}
      </span>
    </>
  );
};
