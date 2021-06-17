import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: "BYekan";
    src: url("fonts/BYekan-webfont.eot") format("eot"),
      url("fonts/BYekan-webfont.ttf") format("ttf"),
      url("fonts/BYekan-webfont.woff") format("woff");
    font-style: normal;
    font-weight: normal;
  } */
  *{
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.text};
    font-family:"BYekan",Arial, sans-serif;
    transition: all 0.50s linear;
    caret-color:${({ theme }) => theme.accent};
  }
  ::-moz-selection { /* Code for Firefox */
  color:${({ theme }) => theme.secondary.main};
  background:${({ theme }) => theme.accent};
}

::selection {
  color:${({ theme }) => theme.secondary.main};
  background:${({ theme }) => theme.accent};
}
  button:focus {
    outline: none;
  }
  a {
    text-decoration: none !important;
  }
  a:hover{
    color: inherit;
  }
  .bp3-menu,.bp3-popover2 .bp3-popover2-content{
    background:${({ theme }) => theme.primary.main};
    color:${({ theme }) => theme.text};
  }
  .bp3-menu li:hover{
    color:${({ theme }) =>
      theme.isDark ? theme.secondary.dark : theme.secondary.main};
  }
  `;
