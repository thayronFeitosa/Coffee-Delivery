import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

import {
  HeaderContainer,
  ContainerMap,
  ContainerMapShop,
} from "./styles";
import { ButtonShopping } from "../ButtonShopping";
import { useContext } from "react";
import { OrderCoffeeContext } from "../../context/OrderCoffeeContext";

export function Header() {
  const { sumQuantityCoffee } = useContext(OrderCoffeeContext)

  const account = sumQuantityCoffee()
  
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="/assets/Logo.svg" alt="" />
      </NavLink>
      <ContainerMapShop>
        <ContainerMap>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS {sumQuantityCoffee()}</p>
        </ContainerMap>
        <ButtonShopping size={account} />
      </ContainerMapShop>
    </HeaderContainer>
  );
}
