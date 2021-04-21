import { createGlobalStyle } from 'styled-components';

const LayoutGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'Roboto' sans-serif;
    /* font-size: 62.5%; */
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
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
