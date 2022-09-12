import { FormikForm } from './Form.styled';

export const Form = ({ children }) => {
  return <FormikForm autoComplete="off">{children}</FormikForm>;
};
