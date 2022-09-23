import * as Styled from "./style";
import Button from "@components/Button";

function CardFooter() {
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
      <Button>Start my trial</Button>
    </Styled.Footer>
  );
}

export default CardFooter;