import * as Styled from "@components/Card/Footer/style";

function Footer() {
  return (
    <Styled.Footer>
      <Styled.List>
        <Styled.ListItem>
          <Styled.Icon>
            <use href="#icon-check"/>
          </Styled.Icon>
          Unlimited websites
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.Icon>
            <use href="#icon-check"/>
          </Styled.Icon>
          100% data ownership
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.Icon>
            <use href="#icon-check"/>
          </Styled.Icon>
          Email reports
        </Styled.ListItem>
      </Styled.List>
      <Styled.Button>Start my trial</Styled.Button>
    </Styled.Footer>
  );
}

export default Footer;