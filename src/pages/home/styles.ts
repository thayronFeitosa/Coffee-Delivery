import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const ContainerCoffee = styled.div`
  display: flex;
  flex-direction: row; 

  width: 1150px;
  flex-wrap: wrap;

  > div {

    margin: 15px
  }
`;

export const TitleContainerCoffee = styled.div`
  display: flex;
  flex-direction: row; 

  width: 1100px;
  flex-wrap: wrap;
  margin-top: 54px;
  margin-bottom: 54px;

  p {

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: #403937;
  }
`;