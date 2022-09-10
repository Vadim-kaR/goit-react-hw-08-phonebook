import { Field } from 'formik';
import styled from 'styled-components';

export const Inpute = styled(Field)`
  border-radius: 5px;
  border: none;
  height: 20px;
  outline: none;
  padding: 3px 10px;
`;

export const LabelText = styled.span`
  padding-bottom: 5px;
`;

export const InputeTitle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
