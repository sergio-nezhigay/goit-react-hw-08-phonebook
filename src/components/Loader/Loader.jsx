import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsAPI';

export function Loader() {
  const { isLoading, error } = useFetchContactsQuery();
  return (
    <LoaderContainer>
      {isLoading && !error && (
        <ThreeDots
          height="30"
          width="100"
          radius="9"
          color="#1da1f2"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}
    </LoaderContainer>
  );
}
