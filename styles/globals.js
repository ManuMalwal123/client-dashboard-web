import { createGlobalStyle } from "styled-components";
import theme from "../themes/default";

export const GlobalStyle = createGlobalStyle`
        html,
body {
  padding: 0;
  margin: 0;
  font-family: ${theme.font.defaultfont};
  background-color: #62626202;
}
* {
  box-sizing: border-box;
}
` 