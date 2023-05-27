import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Navigation } from 'components/Navigation/Navigation';

export default function SharedLayout() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading the app...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
}
