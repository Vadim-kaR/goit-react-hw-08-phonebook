import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  font-weight: 500;
`;

export const NameText = styled.p`
  width: 50%;
`;

export const NumberText = styled.p`
  width: 50%;
`;

export const DeleteBtn = styled.button`
  padding: 3px 5px;
  border-radius: 5px;
  border: none;
  background-color: #0396aa;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #027583;
  }
`;
