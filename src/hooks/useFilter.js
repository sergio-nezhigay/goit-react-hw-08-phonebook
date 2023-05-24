import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';

export const useFilter = () => {
  const filter = useSelector(selectFilter);

  return {
    filter,
  };
};
