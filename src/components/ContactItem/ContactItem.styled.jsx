import styled from 'styled-components';

const StyledItemContacts = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledTextContacts = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const StyledButtonContacts = styled.button`
  padding: 2px 8px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: red;
    color: white;
  }
`;

export { StyledItemContacts, StyledTextContacts, StyledButtonContacts };
