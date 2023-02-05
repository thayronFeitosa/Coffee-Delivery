import { Container } from "./styles";

export type typeArrayNameCoffee = {
  name: string;
}

interface TypeCoffeeProps {
  arrayName: typeArrayNameCoffee[];
}

export function TypeCoffee({ arrayName }: TypeCoffeeProps) {
  return (
    <Container>
      {arrayName.map((coffe) => (<span>{coffe.name}</span>))}
    </Container>
  );
}
