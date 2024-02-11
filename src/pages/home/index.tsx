import { CardCoffeeCatalog } from "../../components/cardCoffeeCatalog";
import { Header } from "../../components/header";
import { DescriptionHome } from "./components/description";
import { Container, ContainerCoffee, TitleContainerCoffee } from "./styles";
import allCoffees from '../../../teste.json';

export function Home() {

  return (
    <>
      <Container>
        <Header />
        <DescriptionHome />
        
          <TitleContainerCoffee><p>Nossos cafés</p></TitleContainerCoffee>
        <ContainerCoffee>
          {allCoffees.data.map((data) => (
            <CardCoffeeCatalog
              id={data.id}
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
