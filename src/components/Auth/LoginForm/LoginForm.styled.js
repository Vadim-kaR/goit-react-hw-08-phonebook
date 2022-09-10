import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  width: 320px;
`;

export const Text = styled.h1`
  padding-bottom: 40px;
`;
export const Error = styled(ErrorMessage)`
  padding: 5px 0 5px 0;
  color: #ff8900;
  font-weight: 500;
`;
