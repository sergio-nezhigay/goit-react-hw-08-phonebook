import React, { useId } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { Label } from 'components/ContactForm/ContactForm.styled';
import { InputShort } from './Filter.styled';
import { useFilter } from 'hooks/useFilter';

export function Filter() {
  const { filter } = useFilter();
  const filterInputId = useId().replace(/:/g, '');
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <Label htmlFor={filterInputId}>Find contacts by name</Label>
      <InputShort
        type="text"
        name="filter"
        placeholder="Enter your search"
        value={filter}
        onChange={onChange}
        id={filterInputId}
      />
    </div>
  );
}
