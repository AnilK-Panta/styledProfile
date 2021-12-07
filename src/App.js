import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/style/Container.style";

const theme = {
  colors: {
    header: "blue",
    body: "green",
    footer: "black",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          <h1>Hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
