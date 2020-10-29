import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: 0;
    font-size: 1.6rem;
  }

  html{
    font-size: 62.5%;
  }

  html,body,#root{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: #282A36;
  }


`;

export default GlobalStyles;
