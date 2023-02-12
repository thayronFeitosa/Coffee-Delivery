import * as Styles from './styles'

export interface TYpeTitleComponentProps {
  children: React.ReactNode;
  Title: string;
  Description: string;
  colorSvg: string;
}

export const TitleComponent = ({ children, Description, Title, colorSvg }: TYpeTitleComponentProps) => {
  return (
    <Styles.Container colorSvg={colorSvg ?? "#FFFFF"}>
      {children}
      <Styles.TextContainer>
        <Styles.Title>{Title}</Styles.Title>
        <Styles.Description>{Description}</Styles.Description>
      </Styles.TextContainer>


    </Styles.Container>
  );
}