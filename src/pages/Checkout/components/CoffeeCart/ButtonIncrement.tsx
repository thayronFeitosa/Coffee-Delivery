import { StyleButtonIncrementDecrement } from './styles'
interface IProps {
  increment: () => void;
  decrement: () => void;
  value: number
}

export const ButtonIncrement = ({ decrement, increment, value }: IProps) => {
  return (
    <StyleButtonIncrementDecrement>

      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>

    </StyleButtonIncrementDecrement>
  )
}