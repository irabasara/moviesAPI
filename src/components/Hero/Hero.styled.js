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
`;
