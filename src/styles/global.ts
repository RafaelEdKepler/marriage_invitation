import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "EB Garamond", sans-serif;
    background-image: url('/casamento.gif'), url('/fundo_1.jpg');
    background-repeat: repeat;
    background-size: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;