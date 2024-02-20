import styled from 'styled-components'

export const StyleFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 171px;
  height: 32px;
  margin-top: 8px;
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;

  margin-top: 40px;
  align-items: center;
  justify-content: center;
`
export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 368px;
  height: 80px;
`
export const StyleImage = styled.div`
  width: 64px;
  height: 64px;

  >img{
    width: 64px;
    height: 64px;
  }
`

export const StyleContainerButtons = styled.div`
  /* background: black; */

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #403937;
    margin-bottom: 8px;
  }

`;

export const StyleButtonIncrementDecrement = styled.div`
  width: 72px;
  height: 32px;
  
  background: #E6E5E5;
  border-radius: 6px;

  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;

  > button {
    width: 18px;
    height: 18px; 
    margin-left: 5px;
    margin-right: 5px;
    color: #8047F8;
    background: #E6E5E5;
    font-size: 20px;
  }

  > span {
    font-family: 'Roboto';
    font-style: normal;
    color: #272221;
    font-size: 16px;
  }

`;

export const StyleButtonRemove = styled.div`

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #E6E5E5;
    gap: 4px;

    width: 91px;
    height: 32px;
    border-radius: 6px;

    > svg {
      color: #8047F8;
      font-size: 24px;
    }
    font-size: 12px;
    font-style: normal;
    font-family: 'Roboto';
    color: #574F4D
  }

`

export const StyleTotal = styled.div`
  /* width: 75%; */
  height: 75%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #574F4D;
`