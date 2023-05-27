import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { setFilter } from 'redux/filter/filterSlice';
import { useFilter } from 'hooks/useFilter';

export function Filter() {
  const { filter } = useFilter();

  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      type="text"
      label="Find contacts by name"
      name="filter"
      placeholder="Enter your search"
      value={filter}
      onChange={onChange}
    />
  );
}
