import { createGlobalStyle } from "styled-components";
import theme from "../themes/default";

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  background-color: #62626202;
  font-size: 13px;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;
