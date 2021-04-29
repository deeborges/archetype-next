import { createGlobalStyle } from 'styled-components';

const LayoutGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0CD15B;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-moz-scrollbar {
    width: 10px;
  }
  ::-moz-scrollbar-thumb {
    background-color: #0CD15B;
    border-radius: 10px;
  }
  ::-moz-scrollbar-track {
    background-color: transparent;
  }

`;

export default LayoutGlobal;
