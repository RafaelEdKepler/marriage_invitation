import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
  }

  body {
    background-image: url('casamento.gif');
    background-repeat: repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
  }
`;