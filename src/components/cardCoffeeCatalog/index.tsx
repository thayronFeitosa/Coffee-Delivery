import {
  ContainerBackground,
  ContainerImage,
  Container,
  DescriptionCoffee,
  HugContainer,
} from "./styles";

import { TypeCoffee } from "./components/description";
import { Add } from "../add";
import { useCallback, useContext, useEffect, useState } from "react";
import { ButtonShopping } from "../ButtonShopping";
import { OrderCoffeeContext, OrderCoffeeStorage, STORAGE_COFFEE_DELIVERY_LIST_COFFEE } from "../../context/OrderCoffeeContext";

type CoffeeCategory = {
  name: string
}


interface ICardCoffeeCatalogProps {
  id: number,
  typesCoffeeCategory: CoffeeCategory[],
  imageCoffee: string,
  titleCoffee: string,
  description: string,
  price: number
}

export function CardCoffeeCatalog({
  id,
  typesCoffeeCategory,
  description,
  imageCoffee,
  price,
  titleCoffee,
  ...rest
}: ICardCoffeeCatalogProps) {
  const { buyCoffee } = useContext(OrderCoffeeContext)
  const [quantityCoffee, setQuantityCoffee] = useState(0);
  const [initPage, setInitPage] = useState<boolean>(false)

  const loadListTask = useCallback(() => {
    if (!initPage) {
      setInitPage(true)
      const listCoffeeStorage = localStorage.getItem(STORAGE_COFFEE_DELIVERY_LIST_COFFEE);
      if (listCoffeeStorage) {



        const resultTest: OrderCoffeeStorage[] = JSON.parse(listCoffeeStorage)
        resultTest.map(((data) => {
          if (data.id === id) setQuantityCoffee(data.quantity)
        }))
      }


    }
  }, [initPage === false]);

  useEffect(() => {
  }, [loadListTask()]);

  function increment() {
    setQuantityCoffee(quantityCoffee + 1);
  }

  function decrement() {
    setQuantityCoffee(quantityCoffee - 1);
  }

  function addShoppingCart() {

    const dataAddCoffee = {
      id: id,
      typesCoffeeCategory,
      description,
      imageCoffee,
      price,
      titleCoffee,
      quantity: quantityCoffee
    }

    buyCoffee(dataAddCoffee)
  }

  useEffect(() => {

  }, [quantityCoffee])

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
          <Add increment={increment} decrement={decrement} value={quantityCoffee} />
          <ButtonShopping
            size={quantityCoffee}
            backgroundContainer="#4B2995"
            colorIcon="#FFFF"
            isFeedback={false}
            addShoppingCart={addShoppingCart}

          />
        </HugContainer>
      </Container>
    </ContainerBackground>
  );
}
