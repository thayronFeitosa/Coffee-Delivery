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

export const Order = styled.div`
  width: 640px;
  height: 372px;
  background: #F3F2F2;
  gap: 12px;
  border-radius: 6px;

`;

export const Payment = styled.div`
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