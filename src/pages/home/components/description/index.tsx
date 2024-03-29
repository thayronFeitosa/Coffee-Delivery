import { DescriptionContainer, Container, HeaderContainer } from "./styles";
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
        <img src="/assets/coffeHome.svg" alt="" />
      </HeaderContainer>     
    </Container>
  );
}
