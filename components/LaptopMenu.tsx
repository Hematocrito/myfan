import Link from 'next/link';
import { Input } from 'components';
import { useFormControl, useFormGroup} from 'hooks';

export const LaptopMenu = () => {
  const FormSearch = useFormGroup({ search: useFormControl(['']) });
  return (
    <div className="hidden md:flex items-center justify-around h-12">
      <Input
        name="search"
        formGroup={FormSearch}
        type="search"
        mode="light"
        color="white"
      >
        {['', '']}
      </Input>
      <div className="text-white font-base text-lg">
        <Link href={'/register/fans'}>
          <a className="mx-3">Sign up</a>
        </Link>
        <Link href={'/login/fans'}>
          <a className="mx-3">Sign in</a>
        </Link>
      </div>
    </div>
  );
};
