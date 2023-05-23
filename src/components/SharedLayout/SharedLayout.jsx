import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
// import { Section } from 'components/Section/Section.styled';
// import { Section } from 'components/Section/Section';

import { AppBar } from 'components/AppBar/AppBar';

export default function SharedLayout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading the app...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
}
