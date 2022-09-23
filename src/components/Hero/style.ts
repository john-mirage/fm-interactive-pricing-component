import styled from "styled-components";
import circleBackground from "@images/pattern-circles.svg";

export const Hero = styled.header`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 26rem; /* 416px */
  padding-top: 2rem; /* 32px */
  padding-bottom: 2rem; /* 32px */
  text-align: center;
  background-image: url(${circleBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    padding-top: 2.5rem; /* 40px */
    padding-bottom: 2.5rem; /* 40px */
  }
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem; /* 8px */
  font-size: 1.25rem; /* 20px */
  font-weight: 800;
  color: ${({theme}) => theme.color.textAndCtaBackground};

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    margin-bottom: 0.75rem; /* 12px */
    font-size: 1.75rem; /* 28px */
  }
`;

export const SubTitle = styled.p`
  max-width: 12.5rem;
  font-size: 0.8125rem; /* 13px */
  font-weight: 600;
  line-height: 1.4375rem; /* 23px */
  color: ${({theme}) => theme.color.text};

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    max-width: 26rem; /* 416px */
    font-size: 0.9375rem; /* 15px */
  }
`;