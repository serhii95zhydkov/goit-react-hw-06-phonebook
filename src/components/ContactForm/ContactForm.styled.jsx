import styled from 'styled-components';

const StyledContactForm = styled.form`
  width: 468px;
  border: 1px solid black;
  padding: 15px;
`;

const StyledLabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 500;
`;

const StyledInputForm = styled.input`
  width: 320px;
  padding: 4px 12px;
  height: 20px;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledButtonForm = styled.button`
  padding: 4px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: white;
    background-color: green;
  }
`;

export {
  StyledContactForm,
  StyledLabelForm,
  StyledInputForm,
  StyledButtonForm,
};
