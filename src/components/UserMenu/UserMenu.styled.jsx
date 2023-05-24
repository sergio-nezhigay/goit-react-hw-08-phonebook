import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  opacity: 0.7;
  font-weight: 500;
  &:hover {
    opacity: 1;
    background-color: #ffa280;
  }
`;
