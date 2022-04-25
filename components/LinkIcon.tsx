import Link from 'next/link';

type Icon = any;

interface LinkIconProps {
  to: string;
  name: string;
  children: Icon;
}

export const LinkIcon = ({ to, name, children }: LinkIconProps) => {
  return (
    <li className="peer w-full my-5 transition-all duration-300 hover:pr-8 text-white bg-blue-450 hover:text-black hover:bg-gray-200 flex items-center justify-between shadow hover:shadow-lg shadow-blue-750/30 px-2 py-2 rounded-3xl cursor-pointer">
      <Link href={to}>
        <a className="font-semibold tracking-wide mx-4 w-full">{name}</a>
      </Link>
      {children}
    </li>
  );
};
