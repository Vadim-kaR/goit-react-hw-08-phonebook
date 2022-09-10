import { Btn } from './Button.styled';

export const Button = ({ children, type }) => {
  return <Btn type={type}>{children}</Btn>;
};
