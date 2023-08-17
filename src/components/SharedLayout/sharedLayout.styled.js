import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  // max-width: 1px;
  margin: 0 auto;
  padding: 0 16px;
  background-image: url(https://images.unsplash.com/photo-1688719330946-f179bc8fc86c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #aaa;
  }
`;
