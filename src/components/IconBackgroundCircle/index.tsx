import { IconProps } from "phosphor-react";
import { Container } from "./styles";

interface PropsIconBackgroundCircle {
  children: React.ReactNode;
  background: string;
}
export function IconBackgroundCircle({
  background,
  children,
}: PropsIconBackgroundCircle) {
  return <Container backgroundSvg={background}>{children}</Container>;
}
