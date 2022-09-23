import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Background from "@components/Background";
import Card from "@components/Card";
import * as Styled from "./style";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Styled.App>
          <Background />
          <Styled.Hero />
          <Card />
        </Styled.App>
      </ThemeProvider>
    </>
  );
}

export default App;
