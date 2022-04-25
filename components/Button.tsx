import { MouseEventHandler } from 'react';

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler;
  width?: string;
  type?: 'solid' | 'trans' | 'submit';
  mode?: 'submit' | 'button';
}

export const Button = ({
  onClick,
  children,
  type,
  mode,
  width,
}: ButtonProps) => {
  const typeButton =
    type === 'submit' ? 'submit' : mode === 'submit' ? 'submit' : 'button';

  return (
    <button
      onClick={onClick}
      type={typeButton}
      style={{ width: width }}
      className={`border-2 font-medium shadow-md  rounded-3xl w-52 px-1 py-1 text-lg my-2 
      ${
        type === 'solid'
          ? 'bg-blue-450 text-white border-blue-450 shadow-blue-550/30'
          : 'text-black shadow-black/30 border-white'
      }`}
    >
      {children}
    </button>
  );
};
