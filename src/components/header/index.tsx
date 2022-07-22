import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

import {
  HeaderContainer,
  ButtonShopping,
  ContainerMap,
  ContainerMapShop,
} from "./styles";

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

        <ButtonShopping>
          <NavLink to="/shop">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ButtonShopping>
      </ContainerMapShop>
    </HeaderContainer>
  );
}
