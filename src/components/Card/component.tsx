import CardFooter from "@components/Card/CardFooter";
import CardHeader from "@components/Card/CardHeader";
import { FunctionComponent } from "react";
import * as Styled from "./style";

const Card: FunctionComponent = () => {
  return (
    <Styled.Card>
      <CardHeader></CardHeader>
      <CardFooter></CardFooter>
    </Styled.Card>
  );
}

export default Card;