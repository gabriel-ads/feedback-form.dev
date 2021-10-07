import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const breakpoints = (cssProp, cssPropUnits, values, mediaQueryType) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    return (mediaQueries += `
      @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
        ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
      }
      `);
  }, "");
  return css([breakpointProps]);
};

const GlobalStyle = createGlobalStyle`
    ${reset}
  html, body {
    font-family: "Roboto", sans-serif;
    color: rgba(0,0,0,0.80);
  }
  .form-group{
  display: flex;
  flex-direction: column;
  color: rgba(0, 8, 38, 0.8);
  }
  button{
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
  input,textarea{
    outline: none;
  }
  *{
    margin: 0;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    -o-transition: 0.25s;
    -ms-transition: 0.25s;
    transition: 0.25s;
    &:hover {
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      -o-transition: 0.2s;
      -ms-transition: 0.2s;
      transition: 0.2s;
    }
  }
`;

export default GlobalStyle;
