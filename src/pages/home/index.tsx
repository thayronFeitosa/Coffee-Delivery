import { CardCoffeeCatalog } from "../../components/cardCoffeeCatalog";
import { Header } from "../../components/header";
import { DescriptionHome } from "./components/description";
import { Container } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <DescriptionHome />
      <Container>
        <CardCoffeeCatalog />
      </Container>
    </>
  );
}
