import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  padding: 40px 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  // padding: 16px 0;
  position: relative;
  img {
    border-radius: 8px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #414141;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover div {
    opacity: 1;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0 0 8px 8px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 300ms ease;
  p {
    margin: 0;
    padding: 0;
    color: white;
  }

  div {
    display: flex;
    gap: 5px;
    align-items: center;
    color: white;
  }
`;
