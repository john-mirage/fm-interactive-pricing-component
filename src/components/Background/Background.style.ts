import styled from "styled-components";
import backgroundPattern from "@images/bg-pattern.svg";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25rem;/* 400px */
  background-image: url(${backgroundPattern});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;

  @media screen and (min-width: ${(props) => props.theme.screen.lg}) {
    height: 28.125rem;/* 450px */
  }
`;