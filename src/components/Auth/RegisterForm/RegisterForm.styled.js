import styled from 'styled-components';
import { ErrorMessage, Form } from 'formik';

export const Error = styled(ErrorMessage)`
  padding: 5px 0 5px 0;
  color: #ff8900;
  font-weight: 500;
`;

export const Text = styled.h1`
  padding-bottom: 40px;
`;

export const FormikForm = styled(Form)`
  width: 320px;
`;
