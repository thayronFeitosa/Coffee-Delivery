import { Title as StyledTitle } from './styled';

interface Props {
  children: React.ReactNode;
}
export function Title({ children }: Props) {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}