import theme from "@styles/theme";
import GlobalStyle from "@styles/global-style";
import { ThemeProvider } from "styled-components";


function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    </>
  );
}

export default App;
