import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  width: 320px;
`;

export const InputeTitle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Inpute = styled(Field)`
  border-radius: 5px;
  border: none;
  height: 20px;
  outline: none;
  padding: 3px 10px;
`;
export const Error = styled(ErrorMessage)`
  padding: 5px 0 5px 0;
  color: #ff8900;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 105px;
  height: 30px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: none;
  background-color: #0396aa;
  color: #fff;
  border: 1px solid #fff;

  cursor: pointer;
  &:active {
    background-color: #027583;
    color: #fff;
    border: 1px solid #fff;
  }
`;

export const Text = styled.h1`
  padding-bottom: 40px;
`;

export const LabelText = styled.span`
  padding-bottom: 5px;
`;
