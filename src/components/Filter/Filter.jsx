import React, { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { filterSelectors } from 'redux/filter';
import { Label } from 'components/ContactForm/ContactForm.styled';
import { InputShort } from './Filter.styled';

export function Filter() {
  const filter = useSelector(filterSelectors.selectFilter);
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
