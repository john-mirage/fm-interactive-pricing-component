import BaseHero from "@components/Hero";
import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3.5rem 1.5rem; /* 56px 24px */

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    padding: 4.25rem 1.5rem; /* 68px 24px */
  }
`;

export const Hero = styled(BaseHero)`
  margin-bottom: 2rem; /* 32px */
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin-bottom: 3.5rem; /* 56px */
  }
`;