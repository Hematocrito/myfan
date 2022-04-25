import Image from 'next/dist/client/image';
import styles from 'styles/login.module.css';
import Logo from 'public/logo.jpg';
import { AppLink } from 'utils/appLink';
import { userService } from 'services';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useEffect } from 'react';
import { TextInputLogin } from 'components/wrappers/TextInputLogin';


export const LoginView = (props: { login: 'model' | 'fans' }) => {
  
  const router = useRouter();
  let texto = router.locale=='es'?'regístrate para interactuar con tus':'en-US'?'sign up to interact whith your':'';
  let texto1 = router.locale=='es'?'modelos e influencers':'en-US'?'models and influencers':'';
  let texto2 = router.locale=='es'?'fanáticos y seguidores':'en-US'?'fans and followers':'';
  let texto3 = router.locale=='es'?'*Los nombres de usuario y las contraseñas distinguen entre MAYUSCULAS y MINUSCULAS':'en-US'?'*Usernames and passwords are CASE SENSITIVE':'';
  let texto4 = router.locale=='es'?'¿Se te olvidó tu contraseña?':'en-US'?'Forgot password?':'';
  
  
  // useEffect(() => {
  //   // redirect to home if already logged in
  //   if (userService.userValue) {
  //     router.push('/influencers');
  //   }
  //   return () => {
  //     router;
  //   };
  // }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('*Email is required').email('*Email invalid'),
    password: Yup.string().required('*Password is required'),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(validationSchema) });

  async function onSubmit({ email, password }: any) {
    console.log('password', password);
    // return userService
    //   .login(email, password)
    //   .then(() => {
    //     // get return url from query parameters or default to '/'
    //     const returnUrl: any = router.query.returnUrl || '/';
    //     router.push(returnUrl);
    //   })
    //   .catch((error) => {
    //     setError('apiError', { message: error });
    //   });
  }

  return (
    <PublicContainer>
      <div className="flex items-center justify-around">
        <AppLink
          href={'/login/fans'}
          styles={styles.link}
          active={styles.linkActive}
        >
          Fans Login
        </AppLink>
        <AppLink
          href={'/login/model'}
          styles={styles.link}
          active={styles.linkActive}
        >
          Model Login
        </AppLink>
      </div>
      <div className="w-[80%] mx-auto mt-10">
        <div className="relative my-4 aspect-[4.8/1]">
          <Image src={Logo} alt="logo" layout="fill"></Image>
        </div>
      </div>
      <div className="uppercase font-bold text-center my-2">
        <h2 className="text-black text-md">{texto}</h2>
        {props.login === 'fans' && (
          <h1 className="text-blue-450 text-[1.3rem] font-bold">
            {texto1}
          </h1>
        )}
        {props.login === 'model' && (
          <h1 className="text-blue-450 text-[1.3rem] font-bold">
            {texto2}
          </h1>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInputLogin
          label="Email"
          fieldName="email"
          register={register}
          errors={errors}
        />

        <TextInputLogin
          label="Password"
          fieldName="password"
          register={register}
          errors={errors}
          type="password"
        />

        <span className="text-sm text-black font-light text-center w-full block">
          {texto3}
        </span>
        <div className="mt-10 mb-4 flex flex-col items-center justify-center">
          <button className="border-2 font-medium shadow-md  rounded-3xl w-52 px-1 py-1 text-lg my-2 bg-blue-450 text-white border-blue-450 shadow-blue-550/30">
            Sign in
          </button>
          <span className="text-sm leading-loose text-blue-450 font-semibold mb-2 cursor-pointer">
            {texto4}
          </span>
          <button
            onClick={() => router.push('/register/fans')}
            className="border-2 font-medium shadow-md text-black shadow-black/30 border-white rounded-3xl w-52 px-1 py-1 text-lg my-2"
          >
            Register
          </button>
        </div>
      </form>
    </PublicContainer>
  );
};
