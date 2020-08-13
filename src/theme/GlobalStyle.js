import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before
  {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  body{
    overflow-x:hidden;
  }
    
`;

export default GlobalStyle;
