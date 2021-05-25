import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "BYekan";
    src: url("fonts/BYekan-webfont.eot") format("eot"),
      url("fonts/BYekan-webfont.ttf") format("ttf"),
      url("fonts/BYekan-webfont.woff") format("woff");
    font-style: normal;
    font-weight: normal;
  }
  *{
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.text};
    font-family:"BYekan";
    transition: all 0.50s linear;
  }
  button:focus {
    outline: none;
  }
  `;
