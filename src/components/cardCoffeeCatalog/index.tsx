import {
  ContainerBackground,
  ContainerImage,
  Container,
  DescriptionCoffee,
  HugContainer,
} from "./styles";
import cafe from "../../assets/Capuccino.svg";
import { TypeCoffee } from "./components/description";
import { Add } from "../add";
import { useState } from "react";
import { ButtonShopping } from "../ButtonShopping";

const typesCoffee = [{ name: "Tradicional" }];

export function CardCoffeeCatalog() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    setValue(value - 1);
  }
  return (
    <ContainerBackground>
      <ContainerImage>
        <img src={cafe} alt="" />
        <TypeCoffee arrayName={typesCoffee} />
      </ContainerImage>
      <Container>
        <DescriptionCoffee>
          <p className="title">Expresso Tradicional</p>
          <p className="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
        </DescriptionCoffee>

        <HugContainer>
          <span className="dolar">R$</span>
          <span className="price">9,90</span>
          <Add increment={increment} decrement={decrement} value={value} />
          <ButtonShopping size={value}
            backgroundContainer="#4B2995"
            colorIcon="#FFFF"
            isFeedback={false}
          
          />
        </HugContainer>
      </Container>
    </ContainerBackground>
  );
}
