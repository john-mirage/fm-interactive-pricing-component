import CardHeader from "@components/Card/CardHeader";
import CardFooter from "@components/Card/CardFooter";
import * as Styled from "./style";

function Card() {
  return (
    <Styled.Card>
      <CardHeader></CardHeader>
      <CardFooter></CardFooter>
    </Styled.Card>
  );
}

export default Card;