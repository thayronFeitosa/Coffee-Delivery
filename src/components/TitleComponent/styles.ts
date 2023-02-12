import styled from 'styled-components';

interface StatusProps {
  colorSvg: string
}

export const Container = styled.div<StatusProps>`
  display: flex;
  width: 530px;
  height: 44px;

  
  > svg {
    color:${(props) => props.colorSvg};
    font-size: 22px;
    margin-right: 8px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

`

export const Title = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: '#403937';
`

export const Description = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: '#574F4D';
`