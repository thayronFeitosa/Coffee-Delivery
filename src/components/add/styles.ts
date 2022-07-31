import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #E6E5E5;
  padding: 8px;
  gap: 4px;
  width: 72px;
  height: 32px;

  border-radius: 6px;
`

export const Button = styled.button`
  width: 22px;
  height: 22px;  
  background: #E6E5E5;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1px;
    line-height: 130%;
    text-align: center;
    color: #272221;
  }

  > svg {
    font-size:20px;
    color: #8047F8;
  }

  &:hover svg {
    color: #4B2995;
  }
  &:focus svg {
    color: #4B2995;
  }
  
`