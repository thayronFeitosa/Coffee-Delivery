import {
  Container, ContainerBackground,
  ContainerImage, DescriptionCoffee,
  HugContainer
} from "./styles";

import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Add } from "../add";
import { ButtonShopping } from "../ButtonShopping";
import { TypeCoffee } from "./components/description";

type CoffeeCategory = {
  name: string
}

interface ICardCoffeeCatalogProps {
  typesCoffeeCategory: CoffeeCategory[],
  imageCoffee: string,
  titleCoffee: string,
  description: string,
  price: number,
  id: number
}

export function CardCoffeeCatalog({
  typesCoffeeCategory,
  description,
  imageCoffee,
  price,
  titleCoffee,
  id
}: ICardCoffeeCatalogProps) {
  const [value, setValue] = useState(1);
  const { addCoffeeToCart } = useCart();

  function increment() {
    setValue((state) => state + 1);
  }

  function addShoping() {
    addCoffeeToCart({
      id: id,
      description: description,
      name: titleCoffee,
      photo: imageCoffee,
      price: price,
      quantity: value,
      tags: typesCoffeeCategory
    })
  }

  function decrement() {
    setValue((state) => state - 1);
  }

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
          <ButtonShopping
            size={value}
            backgroundContainer="#4B2995"
            colorIcon="#FFFF"
            isFeedback={false}
            handleAddShopping={addShoping}

          />
        </HugContainer>
      </Container>
    </ContainerBackground>
  );
}
