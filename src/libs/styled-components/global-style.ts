import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: 0;
}

img {
  max-width: 100%;
  display: block;
}

body,
html,
#root {
  width: 100%;
  height: 100%;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
}`;
