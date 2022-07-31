import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

import {
  HeaderContainer,
  ContainerMap,
  ContainerMapShop,
} from "./styles";
import { ButtonShopping } from "../ButtonShopping";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <ContainerMapShop>
        <ContainerMap>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </ContainerMap>
        <ButtonShopping size={0} />
      </ContainerMapShop>
    </HeaderContainer>
  );
}
