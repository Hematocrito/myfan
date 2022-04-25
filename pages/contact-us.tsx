import { Button, Input } from 'components';
import { PublicContainer } from 'components/wrappers/PublicContainer';
import { useFormControl, useFormGroup } from 'hooks';
import { Required } from 'validators';

export default () => {
  const ContactForm = useFormGroup({
    name: useFormControl(['', [Required]]),
    email: useFormControl(['', [Required]]),
    message: useFormControl(['', [Required]]),
  });

  const send = (data: any) => {
    console.log('data', data);
  };

  return (
    <PublicContainer>
      <h1 className="text-blue-450 text-center uppercase font-bold my-1">
        Contact US
      </h1>
      <div className="text-xs text-center px-4 font-light text-black">
        Please fill out all the info beside and we will get back to you with -
        in 48hrs
      </div>
      <form onSubmit={ContactForm.handleSubmit(send)}>
        <Input name="name" formGroup={ContactForm} mode="light">
          {['Your valid name', '']}
        </Input>
        <Input name="email" formGroup={ContactForm} mode="light">
          {['Your valid email', '']}
        </Input>
        <Input name="message" formGroup={ContactForm} mode="light">
          {['Your message', '']}
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
