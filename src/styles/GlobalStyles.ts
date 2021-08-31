import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Noto sans';
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }
`;
