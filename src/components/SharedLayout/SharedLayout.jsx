import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, GlobalStyle } from './sharedLayout.styled';
import { Switcher } from 'components/Switcher/Switcher';
import { useTheme } from 'helpers/themeContext';

const SharedLayout = () => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <GlobalStyle theme={theme} />

      <Header>
        <nav>
          <Link to="/" theme={theme}>
            Home
          </Link>
          <Link to="/movies" theme={theme}>
            Movies
          </Link>
        </nav>
        <Switcher />
      </Header>
      <main>
        <Suspense fallback={<div>...loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
