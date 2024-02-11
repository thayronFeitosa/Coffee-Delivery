import { ButtonHTMLAttributes } from 'react'

import { ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

interface ButtonShoppingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundContainer?: string;
  colorIcon?: string;
  size: number;
  isFeedback?: boolean;
  addShoppingCart?: () => void;
}
export function ButtonShopping({
  size,
  backgroundContainer = "#F1E9C9",
  colorIcon = "#C47F17",
  isFeedback = true,
  addShoppingCart
}: ButtonShoppingProps) {
  return (
    <Container backgroundContainer={backgroundContainer} colorIcon={colorIcon}>
      {isFeedback && <span>{size}</span>}


      {addShoppingCart ?
        <button
          onClick={addShoppingCart}
        >
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
        :
        <NavLink to="/shop">
          <ShoppingCartSimple size={22} weight="fill" />

        </NavLink>
      }

    </Container>
  );
}
