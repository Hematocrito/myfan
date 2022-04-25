import { LoginView } from 'components/LoginView';
import { GetStaticProps } from 'next';

export default LoginView;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { login: 'fans' },
  };
};
