import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import Container from '../components/Container';
import { userService } from 'services';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Layout from 'components/Layout';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import { Outlet } from 'utils/Outlet';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const [user, setUser] = useState(null);
  // const [authorized, setAuthorized] = useState(false);

  // useEffect(() => {
  //   // on initial load - run auth check
  //   authCheck(router.asPath);

  //   // on route change start - hide page content by setting authorized to false
  //   const hideContent = () => setAuthorized(false);
  //   router.events.on('routeChangeStart', hideContent);

  //   // on route change complete - run auth check
  //   router.events.on('routeChangeComplete', authCheck);

  //   // unsubscribe from events in useEffect return function
  //   return () => {
  //     router.events.off('routeChangeStart', hideContent);
  //     router.events.off('routeChangeComplete', authCheck);
  //   };

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // function authCheck(url: String) {
  //   // redirect to login page if accessing a private page and not logged in
  //   setUser(userService.userValue);
  //   const publicPaths = [
  //     '/login/fans',
  //     '/login/model',
  //     '/register/fans',
  //     '/register/model',
  //   ];
  //   const path = url.split('?')[0];
  //   if (!userService.userValue && !publicPaths.includes(path)) {
  //     setAuthorized(false);
  //     router.push({
  //       pathname: '/login/fans',
  //       query: { returnUrl: router.asPath },
  //     });
  //   } else {
  //     setAuthorized(true);
  //   }
  // }

  return (
    <div className="flex flex-col overflow-x-hidden bg-white min-h-screen">
      <Head>
        <title>My Adult fan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Navbar user={false} />
      <section className="h-full min-h-screen">
        <Outlet>
          {/* {authorized &&  */}
          <Component {...pageProps} />
          {/* } */}
          </Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
}
export default MyApp;
