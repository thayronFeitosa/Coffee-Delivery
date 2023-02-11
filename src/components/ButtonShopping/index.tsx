import { ButtonHTMLAttributes } from 'react'

import { ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

interface ButtonShoppingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundContainer?: string;
  colorIcon?: string;
  size?: number;
  isFeedback?: boolean;
  handleAddShopping?: () => void;
}

export function ButtonShopping({
  size,
  backgroundContainer = "#F1E9C9",
  colorIcon = "#C47F17",
  isFeedback = true,
  handleAddShopping
}: ButtonShoppingProps) {
  return (
    <Container backgroundContainer={backgroundContainer} colorIcon={colorIcon}>
      {isFeedback && <span>{size}</span>}
      <NavLink to="/checkout">
        <ShoppingCartSimple size={22} weight="fill" onClick={handleAddShopping} />
      </NavLink>
    </Container>
  );
}
