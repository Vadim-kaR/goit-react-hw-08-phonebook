import { Inpute, LabelText, InputeTitle } from './Inpute.styled';

export const FormInpute = ({ text, name, children, type = 'text' }) => {
  return (
    <InputeTitle>
      <LabelText>{text}</LabelText>
      <Inpute name={name} type={type} />
      {children}
    </InputeTitle>
  );
};
