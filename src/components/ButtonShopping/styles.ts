import styled from 'styled-components'

interface IColorProps {
  backgroundContainer: string;
  colorIcon: string;
}

export const Container = styled.div<IColorProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background:${(props) => props.backgroundContainer};
  border-radius: 6px;
  margin-left: 12px;


  svg {
    color:${(props) => props.colorIcon}
  }
  position: relative;
  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    background: ${(props) => props.colorIcon}
  }
`