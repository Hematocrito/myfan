import { Button, Input } from 'components';
import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useFormControl, useFormGroup } from 'hooks';

export default () => {
  const Form = useFormGroup({
    name: useFormControl(['']),
    email: useFormControl(['']),
    url: useFormControl(['']),
    complaint: useFormControl(['']),
  });

  const send = (data: any) => {
    console.log('data :>> ', data);
  };
  return (
    <PublicContainer>
      <h1 className="text-blue-450 text-center uppercase font-bold my-1">
        Complaints Policy
      </h1>
      <div className="text-xs text-center px-4 font-light text-black">
        We are doing our best so you will enjoy the content provided. If, in any
        case, you have a complaint, please let us know. All complaints will be
        reviewed and resolved within seven business days.
      </div>
      <form onSubmit={Form.handleSubmit(send)}>
        <Input name="name" formGroup={Form} mode="light">
          {['Name', '']}
        </Input>
        <Input name="email" formGroup={Form} mode="light">
          {['Email', '']}
        </Input>
        <Input name="url" formGroup={Form} mode="light">
          {['Url', '']}
        </Input>
        <Input name="complaint" formGroup={Form} mode="light">
          {['Complaint', '']}
        </Input>
        <div className="flex items-center justify-center">
          <Button type="solid" mode="submit">
            Send
          </Button>
        </div>
      </form>
    </PublicContainer>
  );
};
