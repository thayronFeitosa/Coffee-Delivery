import { Minus, Plus } from "phosphor-react";
import { Container, Button } from "./styles";

interface AddProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}

export function Add({ value, decrement, increment }: AddProps) {
  return (
    <Container>
      <Button onClick={decrement}>
        <Minus weight="fill" />
      </Button>
      <span>{value}</span>
      <Button onClick={increment}>
        <Plus weight="fill" />
      </Button>
    </Container>
  );
}
