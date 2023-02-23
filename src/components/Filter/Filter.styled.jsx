import styled from 'styled-components';

const StyledLabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 500;
`;

const StyledInputFilter = styled.input`
  width: 320px;
  padding: 4px 12px;
  height: 20px;
  border-radius: 5px;
  font-size: 16px;
`;

export { StyledLabelFilter, StyledInputFilter };
