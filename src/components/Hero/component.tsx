import * as Styled from "./style";

function Hero({ className }: { className: string }) {
  return (
    <Styled.Hero className={className}>
      <Styled.Title>Simple, traffic-based pricing</Styled.Title>
      <Styled.SubTitle>Sign-up for our 30-day trial. No credit card required.</Styled.SubTitle>
    </Styled.Hero>
  );
}

export default Hero;