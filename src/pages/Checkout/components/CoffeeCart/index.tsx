import { ButtonIncrement } from './ButtonIncrement';
import { Container, StyleImage, StyleFlex, StyleButtonRemove, StyleContainerButtons, StyleTotal, Group } from './styles';
// import {} from 'i'
import { Trash } from 'phosphor-react';

interface ICoffeeCardProps {
  image: string;
  title: string;
  price: number;
  total: number;
  increment: () => void;
  decrement: () => void;
  remove: () => void
}

export function CoffeeCart({ image, title, price, total, decrement, increment, remove }: ICoffeeCardProps) {
  return (
    <>
      <Container>
        <Group>
          <StyleImage>
            <img src={`/assets/${image}`} />
          </StyleImage>
          <StyleContainerButtons>
            <p>{title}</p>
            <StyleFlex>
              <ButtonIncrement
                decrement={decrement}
                increment={increment}
                value={total}
              />
              <StyleButtonRemove>
                <button onClick={remove}>
                  {<Trash />} REMOVER
                </button>
              </StyleButtonRemove>

            </StyleFlex>
          </StyleContainerButtons>
          <StyleTotal>
            <span>R$ {price}</span>
          </StyleTotal>
        </Group>
      </Container>
    </>
  )
}