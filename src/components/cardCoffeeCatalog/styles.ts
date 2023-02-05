import styled from 'styled-components';


export const ContainerBackground = styled.div`
  width: 256px;
  height: 310px;
  background: #f3f2f2;
  border-radius: 6px 36px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerImage = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img {
  width: 120px;
  margin-top: -20px;
  margin-bottom: 12px;
}
`

export const DescriptionCoffee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
  }

  .description {
    width: 216px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8D8686;
    text-align: center;
  }
`

export const HugContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  
  .dolar {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  .price {
    margin-left: 5px;
    margin-right: 20px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    color: #574F4D;
  }
`

export const ButtonShopping = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background:${({theme}) => theme['purple-dark']};
  border-radius: 6px;
  margin-left: 12px;


  svg {
    color:${({theme}) => theme['white']}
  }
`