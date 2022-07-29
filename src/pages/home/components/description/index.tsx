import { DescriptionContainer, Container, HeaderContainer } from "./styles";
import coffeHome from "../../../../assets/coffeHome.svg";
import { Activity, Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { IconBackgroundCircle } from "../../../../components/IconBackgroundCircle";
import { DescriptionIcon } from "./DescriptionIcon";
export function DescriptionHome() {
  return (
    <Container>
      <HeaderContainer>
        <DescriptionContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div>
          <DescriptionIcon />
      </div>
        </DescriptionContainer>
        <img src={coffeHome} alt="" />
      </HeaderContainer>
     
    </Container>
  );
}
