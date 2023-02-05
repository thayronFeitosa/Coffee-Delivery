import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 132px;
  height: 46px;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow']};

  color: ${(props) => props.theme['white']};
  transition:  0.2s;


  :hover {
  background: ${(props) => props.theme['yellow-dark']};
    
  }
`