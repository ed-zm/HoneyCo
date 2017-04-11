import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Oswald|Roboto');
  
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    .btn {
      font-size: 1.25rem;
    }
    
    @media (min-width: 1093px) {
      font-size: 1.5rem;
      .btn {
        font-size: 1.5rem;
      }
    }
    @media (min-width: 1341px) {
      font-size: 2rem;
      .btn {
        font-size: 2rem;
      }
    }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    
    h1, h2, h3, h4, h5, h6, button {
      font-family: 'Oswald', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

`;
