import { ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

interface ButtonShoppingProps {
  backgroundContainer?: string;
  colorIcon?: string;
  size: number;
  isFeedback?: boolean;
}
export function ButtonShopping({
  size,
  backgroundContainer = "#F1E9C9",
  colorIcon = "#C47F17",
  isFeedback = true,
}: ButtonShoppingProps) {
  return (
    <Container backgroundContainer={backgroundContainer} colorIcon={colorIcon}>
      {isFeedback && <span>{size}</span>}
      <NavLink to="/shop">
        <ShoppingCartSimple size={22} weight="fill" />
      </NavLink>
    </Container>
  );
}
