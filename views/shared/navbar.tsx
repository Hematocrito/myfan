import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Navbar = ({ routes, ...props }: any) => {
  const { asPath, isReady } = useRouter();

  // const child = Children.only(children)
  // const childClassName = child.props.className || ''
  // const [className, setClassName] = useState(childClassName)

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // console.log('asPath :>> ', asPath);
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      // const firstPath = asPath.slice(1, asPath.lastIndexOf('/'));
      // console.log('firstPath :>> ', firstPath);
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      // const newClassName = childClassName
      // linkPathname === activePathname
      //   ? `${childClassName} ${activeClassName}`.trim()
      //   : childClassName

      // if (newClassName !== className) {
      //   setClassName(newClassName)
      // }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    // childClassName,
    // activeClassName,
    // setClassName,
    // className,
  ]);

  const links = routes;
  // const { asPath } = useRouter();
  return (
    <div>
      <ul className="flex justify-around px-4 overflow-hidden text-xs border-b border-gray-300">
        {links.map((link: any) => {
          return (
            <li
              className={`mx-3 uppercase mt-1 font-extrabold ${
                // ||
                // (asPath.slice(0, asPath.lastIndexOf('/')) ===
                //   `/${link.path.slice(0, link.path.lastIndexOf('/'))}`
                asPath === `/${link.path}` ||
                (link.title === 'Clips' && asPath.indexOf('clips') != -1) ||
                (link.title === 'Media' && asPath.indexOf('media') != -1)
                  ? 'border-b-2 text-black border-black'
                  : 'text-blue-450'
              }`}
              key={link.path}
            >
              <Link href={`/${link.path}`}>
                <a>{link.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
