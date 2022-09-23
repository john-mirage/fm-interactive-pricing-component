import { FunctionComponent } from "react";
import * as Styled from "./style";

interface Props {
  className?: string;
}

const Hero: FunctionComponent<Props> = ({ className }) => {
  return (
    <Styled.Hero className={className}>
      <Styled.Title>Simple, traffic-based pricing</Styled.Title>
      <Styled.SubTitle>Sign-up for our 30-day trial. No credit card required.</Styled.SubTitle>
    </Styled.Hero>
  );
}

export default Hero;