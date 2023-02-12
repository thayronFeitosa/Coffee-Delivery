import styled from 'styled-components';


export const Container = styled.div`

  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: center;

`;

export const ContainerOrderAndPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerRow = styled.div`

`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;

  > #raio {
      > div {
      margin-left: 12px;
    }
  }
  
  #raio {
    display: flex;
    flex-direction: row
  }
  /* background-color: red; */
  width: 560px;
`

export const Order = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  width: 640px;
  height: 372px;
  background: #F3F2F2;
  gap: 12px;
  border-radius: 6px;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    & input {
      height: 42px;
      width: 575px;
      margin: 15px 0px 0px 0px;
    }

    > #cep {
      
      display: flex;
      width: 560px;     
      > input {
        margin: 15px 0px 0px -12px;
        width: 200px;
      } 
    }

    > #p2-address {
      margin: 0px 0px 0px 0px;
      display: flex;

      > #number {
        width: 200px;
      }

      > #complement {
        margin-left: 12px;
        width: 348px;
      }
    }

    > #p3-address {
      display: flex;

      > #district { 
        margin: 15px 0px 0px 0px;
        width: 200px;
      }

      > #city {
        margin-left: 12px;
        width: 272px;
      }

      #uf {
        margin-left: 12px;
        width: 52px;
      }
    }
 
  }

`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 640px;
  height: 207px;
  background: #F3F2F2;

  margin-top: 12px;
  gap: 12px;
  border-radius: 6px;

`;

export const OrderDetails = styled.div`
  width: 448px;
  height: 498px;
  background: #F3F2F2;
  border-radius: 6px 44px;

  margin-left: 32px;
`;
