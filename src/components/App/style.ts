import BaseHero from "@components/Hero";
import backgroundPattern from "@images/bg-pattern.svg";
import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3.5rem 1.5rem; /* 56px 24px */
  background-color: ${({theme}) => theme.color.background};

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    padding: 4.25rem 1.5rem; /* 68px 24px */
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 25rem;/* 400px */
  background-image: url(${backgroundPattern});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    height: 28.125rem;/* 450px */
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