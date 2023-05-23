import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #4a4a4a62;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 30px;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
  border-radius: 4px;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 8px 16px;
  outline: none;
  border: none;
  font: inherit;
`;

export const Button = styled.button`
  background-color: rgb(106 106 106);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border: none;
  height: 100%;
  color: #fff;
  font-weight: 500;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;
