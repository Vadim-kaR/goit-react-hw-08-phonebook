import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  padding: 12px;
  color: #fff;

  &.active {
    color: #ffcd00;
  }
`;
