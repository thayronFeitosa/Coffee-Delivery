import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: IPropsButton) {
  return (
    <>
      <ButtonContainer {...rest}>{children}</ButtonContainer>
    </>
  );
}
