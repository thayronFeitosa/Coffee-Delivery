import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 104px;
  padding: 32px 160px;
`

export const ContainerMapShop = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerMap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  width: 143px;
  height: 38px;
  gap: 4px;
  
  background:${({theme}) => theme['purple-light']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  
  color: ${({theme}) => theme['purple-dark']};

  > svg {
    color: ${({theme}) => theme['purple']};
  }
`

export const ButtonShopping = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background:${({theme}) => theme['yellow-light']};
  border-radius: 6px;
  margin-left: 12px;


  svg {
    color:${({theme}) => theme['yellow-dark']}
  }
`