import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global-style";

export const theme = {
  colors: {
    magenta: "#E63888",
    ruby: "#cc196b",
    grey: "#888888",
    black_russian: "rgba(0, 8, 38, 0.16)",
    navy_blue: "#0b64e0",
    dark_high: "rgba(0,0,0,0.80)",
    dark_medium: "rgba(0,0,0,0.60)",
    dark_light: "rgba(0,0,0,0.44)",
    light_high: "rgba(255,255,255,0.80)",
    light_solid: "#FFFFFF",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
