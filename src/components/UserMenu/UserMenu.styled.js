import styled from 'styled-components';

export const Text = styled.p`
  display: inline-block;
  font-weight: 700;
  color: #fff;
  padding-right: 30px;
`;

export const UserNameText = styled.span`
  color: #ffcd00;
  padding-left: 10px;
`;

export const Button = styled.button`
  width: 80px;
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
  }
`;
