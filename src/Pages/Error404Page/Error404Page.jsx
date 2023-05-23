import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorTitle, ErrorText } from './Error404Page.styled';

export default function Error404Page() {
  return (
    <div>
      <ErrorTitle>404</ErrorTitle>
      <ErrorText>Ooop's! You weren't supposed to see this</ErrorText>
      <ErrorText>
        The page you are looking for no longer exists. Return to the&nbsp;
        <Link to="/">Home page</Link>&nbsp; and remember: you haven't seen
        anything.
      </ErrorText>
    </div>
  );
}
