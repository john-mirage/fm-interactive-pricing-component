import BaseHero from "@components/Hero";
import styled from "styled-components";

export const Hero = styled(BaseHero)`
  margin-bottom: 2rem; /* 32px */
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin-bottom: 3.5rem; /* 56px */
  }
`;