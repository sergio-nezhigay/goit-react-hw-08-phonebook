import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchBox.styled';

function SearchBox({ onSubmit, initialValue }) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ query });
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="query" value={query} onChange={handleChange} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
};

export default SearchBox;
