import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { IconBackgroundCircle } from "../../../../components/IconBackgroundCircle";
import {
  ContainerDescriptionIcon,
  DescriptionIconDiv,
  IconDiv,
} from "./styles";

export function DescriptionIcon() {
  return (
    <ContainerDescriptionIcon>
      <DescriptionIconDiv>
        <IconDiv>
          <IconBackgroundCircle background="#C47F17">
            <ShoppingCartSimple weight="fill" />
          </IconBackgroundCircle>
          <span>Compra simples e segura</span>
        </IconDiv>

        <IconDiv>
          <IconBackgroundCircle background="#DBAC2C">
            <Timer weight="fill" />
          </IconBackgroundCircle>
          <span>Entrega rápida e rastreada</span>
        </IconDiv>
      </DescriptionIconDiv>

      <DescriptionIconDiv className="div-2">
        <IconDiv>
          <IconBackgroundCircle background="#574F4D">
            <Package weight="fill" />
          </IconBackgroundCircle>
          <span>Compra simples e segura</span>
        </IconDiv>

        <IconDiv>
          <IconBackgroundCircle background="#8047F8">
            <Coffee weight="fill" />
          </IconBackgroundCircle>
          <span>Entrega rápida e rastreada</span>
        </IconDiv>
      </DescriptionIconDiv>

    </ContainerDescriptionIcon>
  );
}
