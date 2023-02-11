import { Header } from "../../components/header";
import { InputContainer } from "../../components/Input/styles";
import { Container, ContainerOrderAndPayment, Order, OrderDetails, Payment } from "./styles";

export function Checkout() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <ContainerOrderAndPayment>

          <Order>
            <InputContainer />
            <InputContainer />
          </Order>

          <Payment>

            <InputContainer />
            <InputContainer />
          </Payment>

        </ContainerOrderAndPayment>

        <OrderDetails>ASDFASD</OrderDetails>

      </Container>
    </>
  )
}