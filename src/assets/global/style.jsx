import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
    background-color: #f0f0f0;
    color: #ffff;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    overflow-y: hidden;
  }
  `