import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const InputTitle = styled.span`
  margin-right: 10px;
  width: 50px;
`;

export const InputField = styled.label`
  margin-bottom: 20px;
`;

export const AddBtn = styled.button`
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
  &:hover {
    background-color: #027583;
    color: #fff;
    border: 1px solid #fff;
    font-weight: 500;
  }
`;

export const Inpute = styled(Field)`
  border-radius: 5px;
  border: none;
  height: 20px;
  outline: none;
  padding: 3px 10px;
  width: 180px;
`;

export const Error = styled(ErrorMessage)`
  padding: 5px 0 5px 0;
  color: #a62217;
  font-weight: 500;
`;
