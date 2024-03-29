import { Minus, Plus } from "phosphor-react";
import { Container, Button } from "./styles";

interface AddProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}
const VALUE_INVALID = 0;

export function Add({ value, decrement, increment }: AddProps) {
  return (
    <Container>
      <Button
        disabled={value <=VALUE_INVALID ? true : false} 
        onClick={decrement}
      >
        <Minus weight="fill" />
      </Button>
      <span>{value}</span>
      <Button onClick={increment}>
        <Plus weight="fill" />
      </Button>
    </Container>
  );
}
