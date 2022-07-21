import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IPropsButton {
  children: ReactNode;
  onClick?: () =>
  void;
}

export function Button({ children, onClick }: IPropsButton) {
  return (
    <>
      <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
    </>
  );
}
