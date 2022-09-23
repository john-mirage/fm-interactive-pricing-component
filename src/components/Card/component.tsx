import CardHeader from "@components/Card/CardHeader";
import CardFooter from "@components/Card/CardFooter";
import * as Styled from "./style";
import { FunctionComponent } from "react";

const Card: FunctionComponent = () => {
  return (
    <Styled.Card>
      <CardHeader></CardHeader>
      <CardFooter></CardFooter>
    </Styled.Card>
  );
}

export default Card;