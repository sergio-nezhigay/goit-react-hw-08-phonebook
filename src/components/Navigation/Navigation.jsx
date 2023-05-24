import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import { useAuth } from 'hooks/useAuth';
import { Link, Nav, Header } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Nav>
    </Header>
  );
};
