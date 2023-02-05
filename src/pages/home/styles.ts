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