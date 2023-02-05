import { CardCoffeeCatalog } from "../../components/cardCoffeeCatalog";
import { Header } from "../../components/header";
import { DescriptionHome } from "./components/description";
import { Container, ContainerCoffee } from "./styles";
import cafe from "../../assets/Capuccino.svg";
import allCoffees from '../../../teste.json';

const typesCoffeeCategory = [{ name: "Tradicional" },];

export function Home() {

  return (
    <>
      <Header />
      <DescriptionHome />
      <Container>
        <ContainerCoffee>
          {allCoffees.data.map((data) => (
            <CardCoffeeCatalog
              typesCoffeeCategory={data.category}
              description={data.description}
              imageCoffee={data.image}
              price={Number(data.price)}
              titleCoffee={data.title}
              key={data.id}
            />
          )
          )}
        </ContainerCoffee>
      </Container>
    </>
  );
}
