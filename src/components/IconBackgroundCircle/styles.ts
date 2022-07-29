import styled from 'styled-components';

interface StatusProps {
  backgroundSvg: string
}
export const Container = styled.div<StatusProps>`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 32px;
  height: 32px;
  border-radius: 1000px;


background: ${(props) => props.backgroundSvg};

  > svg {
    color: #ffff;
    font-size: 16px;
  }
`