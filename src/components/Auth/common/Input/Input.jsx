import { Input, LabelText, InputTitle } from './Input.styled';

export const FormInput = ({ text, name, children, type = 'text' }) => {
  return (
    <InputTitle>
      <LabelText>{text}</LabelText>
      <Input name={name} type={type} />
      {children}
    </InputTitle>
  );
};
