import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/style/Container.style";
import { GlobalStyles } from "./components/style/Global";

const theme = {
  colors: {
    header: "blue",
    body: "brown",
    footer: "black",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
