import styled from "styled-components";

export const Card = styled.main`
  position: relative;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 33.75rem; /* 540px */
  padding-top: 2rem; /* 32px */
  padding-bottom: 2rem; /* 32px */
  border-radius: 0.5rem; /* 8px */
  background-color: ${({theme}) => theme.color.pricingComponentBackground};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05);

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    padding-top: 2.5rem; /* 40px */
  }
`;