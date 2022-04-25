import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
  href: string;
  styles: string;
  active: string;
  children: string;
}

export const AppLink = ({ href, styles, active, children }: LinkProps) => {
  const route = useRouter().route;
  return (
    <Link href={href}>
      <a
        className={`text-base md:text-lg 
        ${route === href ? styles + ' ' + active : styles}`}
      >
        {children}
      </a>
    </Link>
  );
};
