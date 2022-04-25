import Link from 'next/link';
import styles from 'styles/login.module.css';
// import { useRegisterController } from 'controllers';
import { AppLink } from 'utils';
import { Input, Button, Select, Checkbox } from 'components';
import SelectReact, { components, OptionProps } from 'react-select';
import { PublicContainer } from 'components/wrappers/PublicContainer';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextInputLogin } from 'components/wrappers/TextInputLogin';
import { useState } from 'react';
import { authService } from 'services';
import Image from 'next/image';

const singleOption = (props: OptionProps<any>) => (
  <components.Option className="inline-block" {...props}>
    <Image src={props.data.flag} alt="flag" height={15} width={30} />
    <span className="leading-5 ml-3">{props.data.name}</span>
  </components.Option>
);

const singleValue = (props: any) => (
  <components.SingleValue className="inline-block" {...props}>
    <Image src={props.data.flag} alt="flag" height={15} width={30} />
    <span className="leading-5 ml-3">{props.data.name}</span>
  </components.SingleValue>
);

export const RegisterView = (props: any) => {
  const [genders, setGenders] = useState(['Male', 'Female', 'Trans']);

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('*First Name is required'),
    lastName: Yup.string().required('*Last Name is required'),
    username: Yup.string().required('*Username is required'),
    email: Yup.string().required('*Email is required').email('*Email invalid'),
    // country: Yup.string().required('*Country is required'),
    password: Yup.string().required('*Password is required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password')], '*Password are not the same')
      .required('*Password is required'),
    gender: Yup.string().required('*Gender is required'),
    termsOfService: Yup.boolean().isTrue(
      '*You must accept the terms of service'
    ),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(validationSchema) });

  async function onSubmit(data: any) {
    console.log('data', data);
    return authService
      .register(data)
      .then((request) => {
        console.log('request :>> ', request);
        reset();
        // get return url from query parameters or default to '/'
        // const returnUrl: any = router.query.returnUrl || '/';
        // router.push(returnUrl);
      })
      .catch((error) => {
        console.log('error :>> ', error);
        // setError('apiError', { message: error });
      });
  }

  // const { FormGroup, register } = useRegisterController();
  console.table(errors);
  return (
    <PublicContainer>
      <div className="flex items-center justify-around">
        <AppLink
          href={'/register/fans'}
          styles={styles.link}
          active={styles.linkActive}
        >
          Fans Register
        </AppLink>
        <AppLink
          href={'/register/model'}
          styles={styles.link}
          active={styles.linkActive}
        >
          Model Register
        </AppLink>
      </div>
      <div className="uppercase text-center my-3">
        <h2 className="text-black text-lg font-extrabold">Create your</h2>
        <h1 className="text-blue-450 text-3xl font-extrabold">free account!</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3 -my-3">
          <TextInputLogin
            label="First Name"
            fieldName="firstName"
            register={register}
            errors={errors}
          />
          <TextInputLogin
            label="Last Name"
            fieldName="lastName"
            register={register}
            errors={errors}
          />
        </div>
        <TextInputLogin
          label="Username ej: brad10..."
          fieldName="username"
          register={register}
          errors={errors}
        />
        <TextInputLogin
          label="Email address"
          fieldName="email"
          register={register}
          errors={errors}
        />

        {/* {props.register === 'model' && (
          <Controller
            control={control}
            name="country"
            defaultValue=""
            // as={<SelectReact />}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <SelectReact
                // {...field}
                styles={{
                  control: (provided: any) => ({
                    ...provided,
                    borderColor: 'rgb(0 178 255)',
                    borderRadius: '1.5rem',
                  }),
                  option: (provided: any) => ({
                    ...provided,
                    backgroundColor: 'transparent',
                    color: 'inherit',
                  }),
                }}
                isClearable={true}
                // menuIsOpen={true}
                // isSearchable={false}
                getOptionLabel={(opt) => opt.name}
                placeholder="Country"
                components={{
                  Option: singleOption,
                  SingleValue: singleValue,
                }}
                onChange={(val) => onChange(val?.code)}
                options={props.countryList}
                value={props.countryList.find((c: any) => c.code === value)}
              />
            )}
          />
        )} */}

        <span className="sm:px-1 text-xs text-red-500">
          {errors.country?.message}
        </span>

        <div className="grid grid-cols-2 gap-3 -my-3">
          <TextInputLogin
            label="Password"
            type="password"
            fieldName="password"
            register={register}
            errors={errors}
          />
          <TextInputLogin
            label="Confirm Password"
            type="password"
            fieldName="passwordConfirmation"
            register={register}
            errors={errors}
          />
        </div>
        <Select
          fieldName="gender"
          label="Gender"
          register={register}
          errors={errors}
          options={genders}
        />
        <span className="text-sm font-light text-center w-full block">
          *Usernames and passwords are CASE SENSITIVE
        </span>
        <div className="py-2 px-1">
          <header className="text-sm text-blue-450 font-bold">
            Personal Data Processing
          </header>
          <Checkbox
            errors={errors}
            fieldName="termsOfService"
            register={register}
          >
            By checking this box, I certify that I am at least 18 years old,
            have the capacity to enter into legally binding contracts, and have
            read and agree to the{' '}
            <span className="text-blue-450">Terms of service</span>
          </Checkbox>
        </div>
        <div className="py-2 px-1">
          <header className="text-sm text-blue-450 font-bold">
            Comunication
          </header>
          <Checkbox errors={errors} fieldName="data" register={register}>
            I agree to recieve e-mails whith news and updates from myadultfan
            family of products
          </Checkbox>
        </div>
        <footer className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className="border-2 font-medium shadow-md  rounded-3xl w-52 px-1 py-1 text-lg my-2 bg-blue-450 text-white border-blue-450 shadow-blue-550/30"
          >
            Create your Account
          </button>
          <div className="font-light text-gray-800 mt-3">
            Have an account already?{' '}
            <Link href={'/login/fans'}>
              <a className="text-blue-450 font-semibold">Login here</a>
            </Link>
          </div>
          <div className="font-light text-gray-800">
            Become a model!{' '}
            <Link href={'/register/fans'}>
              <a className="text-blue-450 font-semibold">Register here</a>
            </Link>
          </div>
        </footer>
      </form>
    </PublicContainer>
  );
};
