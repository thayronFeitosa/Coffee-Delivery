import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  width: 180px;
  font-family: 'Roboto';
  font-style: normal;
  font-size: 12px;
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: '#EBE5F9';
      border-color: '#8047F8';

      &:hover {
        background: '#EBE5F9'
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => '#E6E5E5'};
  color: ${({ theme }) => '#574F4D'};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => '#E6E5E5'};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => '#4B2995'};
  }

  &:hover {
    background: ${({ theme }) => '#D7D5D5'};
  }

  user-select: none;
`;
