import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    background-color: #130A1D;
  }

  body {
    width: 1500px;
    margin: 0 auto;
    color: #FFF;
    box-sizing: border-box;
    padding: 4rem 4rem 2.5rem 4rem;
    font-family: 'Quicksand', sans-serif
  }

  html, body, #root {
    height: 100%;
  }


  #root {
    width: 114rem;
    margin: 0 auto;
  }

  #root::after {
    content: "";
    display: block;
    clear: both;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar-track {
    background-color: #4f4f4f;
    border-radius: 4px;

  }
  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #FFD16B;
    border-radius: 4px;
  }

  @media (max-width: 812px) {
    body {
      padding: 0;
      width: auto;
    }

    html, body, #root {
    }


    #root {
      width: 100%;
      margin-top: 4rem;
    }

  }

`;
