import Button from "@components/Button";
import { FunctionComponent } from "react";
import * as Styled from "./style";

const features = [
  "Unlimited websites",
  "100% data ownership",
  "Email reports",
];

const CardFooter: FunctionComponent = () => {
  return (
    <Styled.Footer>
      <Styled.List>
        {features.map((feature) => (
          <Styled.ListItem>
            <Styled.Icon>
              <use href="#icon-check"/>
            </Styled.Icon>
            { feature }
          </Styled.ListItem>
        ))}
      </Styled.List>
      <Button>Start my trial</Button>
    </Styled.Footer>
  );
}

export default CardFooter;