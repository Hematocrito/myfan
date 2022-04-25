import { DefaultRoute } from 'utils/DefaultRoute';
import { GetStaticProps } from 'next';

export default DefaultRoute;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { route: '/login/fans' },
  };
};
