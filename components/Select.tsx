interface InputProps {
  fieldName: String;
  register: any;
  options: any;
  errors: any;
  type?: String;
  label?: String;
  placeHolder?: String;
  children?: [string, string, any[]];
}

export const Select = ({
  label,
  fieldName,
  register,
  options,
  placeHolder = '',
  errors,
  children,
}: InputProps) => {
  return (
    <div className="my-3">
      <label
        className={`px-1 text-sm text-gray-800
          ${errors[`${fieldName}`] && 'text-red-800'}
        `}
      >
        {label}
      </label>
      <div className="w-full">
        <select
          {...register(fieldName)}
          className={`w-full px-2 py-1 bg-transparent text-base font-semibold  rounded-3xl border outline-none text-gray-600 border-blue-450 focus:ring-2 focus-within:ring-blue-250
            ${errors[`${fieldName}`] && 'border-red-500 ring-red-300'}
          `}
        >
          {options.map((value: any) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <span className="sm:px-1 text-xs text-red-500">
        {errors[`${fieldName}`]?.message}
      </span>
    </div>
  );
};
