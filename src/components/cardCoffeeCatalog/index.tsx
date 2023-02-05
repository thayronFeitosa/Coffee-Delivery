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

type CoffeeCategory = {
  name: string
}


interface ICardCoffeeCatalogProps {
  typesCoffeeCategory: CoffeeCategory[],
  imageCoffee: string,
  titleCoffee: string,
  description: string,
  price: number


}

export function CardCoffeeCatalog({
  typesCoffeeCategory,
  description,
  imageCoffee,
  price,
  titleCoffee,
  ...rest
}: ICardCoffeeCatalogProps) {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    setValue(value - 1);
  }
  console.log(`/assets/${imageCoffee}`);
  
  return (
    <ContainerBackground>
      <ContainerImage>
      <img src={`/assets/${imageCoffee}`} />
        <TypeCoffee arrayName={typesCoffeeCategory} />
      </ContainerImage>
      <Container>
        <DescriptionCoffee>
          <p className="title">{titleCoffee}</p>
          <p className="description">
            {description}
          </p>
        </DescriptionCoffee>

        <HugContainer>
          <span className="dolar">R$</span>
          <span className="price">{price}</span>
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
