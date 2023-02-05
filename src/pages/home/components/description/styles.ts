import styled from 'styled-components';
import introBackgroundImg from "../../../../assets/intro-background.png";
import { rgba } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 34rem;

  background: ${() => `url(${introBackgroundImg}) no-repeat center, linear-gradient(0deg, #FFFFFF 0%, ${rgba('#FAFAFA', 0.2)} 50%, #FAFAFA 100%)`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1150px;
  padding: 32px 160px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 588px;
  height: 124px;


 > h1 {

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']}
  }

  p {
    margin-top: 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};

    font-stretch: 100;
  }

`

export const ContainerDescriptionIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 567px;

   .div-2 {
     margin-left:40px;
   }

`

export const DescriptionIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  > span {
    width: 187px;
    height: 21px;
    padding-left: 12px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #574F4D;
  }
`


