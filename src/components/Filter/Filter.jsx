import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { StyledLabelFilter, StyledInputFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <StyledLabelFilter htmlFor={filterId}>
      Find contacts by name
      <StyledInputFilter
        id={filterId}
        type="text"
        value={value}
        onChange={onChange}
      ></StyledInputFilter>
    </StyledLabelFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
