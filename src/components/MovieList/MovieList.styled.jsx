import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 20px;
`;
export const MovieTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 32px;
  padding: 0;
  list-style: none;
`;

export const MovieLink = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #ffffffbc;
  position: relative;
  display: block;
  width: 100%;
  padding-top: 40%; /* 21:9 aspect ratio */
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  &:before {
    content: '';
    display: block;
    padding-top: 150%;
  }

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
