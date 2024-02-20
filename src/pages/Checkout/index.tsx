import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { Header } from "../../components/header";
import { InputContainer } from "../../components/Input/styles";
import { TitleComponent } from "../../components/TitleComponent";
import { CoffeeCart } from "./components/CoffeeCart";
import { PaymentMethodInput } from "./components/PaymentMethodInput";
import { Title } from "./components/Title";
import * as  StyleComponennts from "./styles";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { OrderCoffeeContext, OrderCoffeeStorage,  } from "../../context/OrderCoffeeContext";

export function Checkout() {
  const { orderCoffee, buyCoffee, sumQuantityCoffee, totalSumPriceCoffee } = useContext(OrderCoffeeContext)

  function decrementCoffee(data: OrderCoffeeStorage) {
    buyCoffee({
      ...data,
      quantity: data.quantity -= 1
    });
  }

  function incrementCoffee(data: any) {
    buyCoffee({
      ...data,
      quantity: data.quantity += 1
    });
  }

  function removeCoffee(data: any) {
    const testes = {
      ...data,
      quantity: data.quantity -= 1
    }

    console.log(testes);

  }


  return (
    <>
      <StyleComponennts.Container>
        <Header />
      </StyleComponennts.Container>

      <StyleComponennts.Container>
        <StyleComponennts.ContainerOrderAndPayment>

          <Title>Complete seu pedido</Title>
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

        <StyleComponennts.OrderDetails>
          <Title>Cafés selecionados</Title>
          <StyleComponennts.BackgroundStyle>

            {orderCoffee.map((data) => (
              <StyleComponennts.ContainerCoffee>
                <CoffeeCart
                  key={data.id}
                  decrement={() => decrementCoffee(data)}
                  increment={() => incrementCoffee(data)}
                  remove={() => removeCoffee(data)}
                  image={data.imageCoffee}
                  price={data.price * data.quantity}
                  title={data.titleCoffee}
                  total={data.quantity}
                />
                <hr/>
              </StyleComponennts.ContainerCoffee>
            ))}

            <div>
              Total de itens:  R$ {totalSumPriceCoffee().toFixed(2)}<br />
              Entregra: R$ {(sumQuantityCoffee() * 0.5).toFixed(2)} <br />
              Total: R$ {(totalSumPriceCoffee() + (sumQuantityCoffee() * 0.5)) }
            </div>


            <Button w="368px" h="46px">confirmar pedido</Button>

          </StyleComponennts.BackgroundStyle>


        </StyleComponennts.OrderDetails>

      </StyleComponennts.Container>
    </>
  )
}