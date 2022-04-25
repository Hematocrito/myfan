import { RegisterView } from 'components/RegisterView';
import { GetStaticProps } from 'next';

export default RegisterView;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { register: 'fans' },
  };
};
