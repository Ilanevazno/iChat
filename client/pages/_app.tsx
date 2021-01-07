import { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { mainTheme } from "../shared";
import { store } from "./../redux/store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
