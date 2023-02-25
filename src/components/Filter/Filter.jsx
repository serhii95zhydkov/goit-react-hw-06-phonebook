import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import { nanoid } from 'nanoid';

import { StyledLabelFilter, StyledInputFilter } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const filterId = nanoid();
  return (
    <StyledLabelFilter htmlFor={filterId}>
      Find contacts by name
      <StyledInputFilter
        id={filterId}
        type="text"
        value={filter}
        onChange={handleFilter}
      ></StyledInputFilter>
    </StyledLabelFilter>
  );
};

export default Filter;
