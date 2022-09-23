import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./style";

const Button: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Styled.Button>{ children }</Styled.Button>
  );
}

export default Button;