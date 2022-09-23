import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Background from "@components/Background";
import Card from "@components/Card";
import * as Styled from "./style";

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Background />
        <Styled.Hero />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
