import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { Header } from "../../components/header";
import { InputContainer } from "../../components/Input/styles";
import { TitleComponent } from "../../components/TitleComponent";
import { PaymentMethodInput } from "./components/PaymentMethodInput";
import * as  StyleComponennts from "./styles";

export function Checkout() {
  return (
    <>
      <StyleComponennts.Container>
        <Header />
      </StyleComponennts.Container>

      <StyleComponennts.Container>
        <StyleComponennts.ContainerOrderAndPayment>

          <StyleComponennts.Order>
            <StyleComponennts.ContainerDescription>
              <TitleComponent
                Title="Endereço de Entrega"
                Description="Informe o endereço onde deseja receber seu pedido"
                colorSvg="#C47F17"
              > <MapPinLine weight="regular" /></TitleComponent>
            </StyleComponennts.ContainerDescription>
            <form action="">
              <div id="cep">
                <InputContainer
                  placeholder="CEP"
                />
              </div>

              <InputContainer
                placeholder="Rua"
              />
              <div id="p2-address">
                <InputContainer
                  id="number"
                  placeholder="Número"
                />
                <InputContainer
                  id="complement"
                  placeholder="Complemento"
                />

              </div>

              <div id="p3-address">
                <InputContainer
                  id="district"
                  placeholder="Bairro"
                />
                <InputContainer
                  id="city"
                  placeholder="Cidade"
                />

                <InputContainer
                  id="uf"
                  placeholder="UF"
                />
              </div>

            </form>

          </StyleComponennts.Order>

          <StyleComponennts.Payment>
            <StyleComponennts.ContainerDescription>
              <TitleComponent
                Title="Pagamento"
                Description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                colorSvg="#8047F8"
              > <CurrencyDollar weight="regular" />
              </TitleComponent>
              <div id="raio">
                <PaymentMethodInput
                  icon={<CreditCard weight="regular" />}
                  title="Cartão de Crédito"
                  key={'label'}
                  id={'key'}
                  label="Cartão de crédito"
                />
                <PaymentMethodInput
                  icon={<Bank weight="regular" />}
                  title="Cartão de débito"
                  key={'label'}
                  id={'key'}
                  label="Cartão de débito"
                />

                <PaymentMethodInput
                  icon={<Money weight="regular" />}
                  title="dinheiro"
                  key={'label'}
                  id={'key'}
                  label="dinheiro"
                />
              </div>

            </StyleComponennts.ContainerDescription>

          </StyleComponennts.Payment>

        </StyleComponennts.ContainerOrderAndPayment>

        <StyleComponennts.OrderDetails>ASDFASD</StyleComponennts.OrderDetails>

      </StyleComponennts.Container>
    </>
  )
}