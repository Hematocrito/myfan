import { RegisterView } from 'components/RegisterView';

export default RegisterView;

export async function getStaticProps() {
  // TO DO change endpoint for a environment var
  // const resquest = await fetch(`http://localhost:8080/countries/list`);
  // const response = await resquest.json();

  return {
      props: { register: 'model',
      // countryList: response.data 
    },
  };
}
