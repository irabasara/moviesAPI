import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroCard = styled.img`
  display: block;
  border-radius: 8px;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  cursor: pointer;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  /* color: #414141;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover div {
    opacity: 1;
  } */
`;
