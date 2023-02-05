import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 434px;
  height: 42px;
  background: #EEEDED;
/* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  padding-left: 12px;

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`;