import theme from "@styles/theme";
import GlobalStyle from "@styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Background from "@components/Background/Background";
import Card from "@components/Card/Card";
import Hero from "@components/Hero/Hero";


function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Background />
        <Hero />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
