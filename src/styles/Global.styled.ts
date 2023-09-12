import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
   }
   
   body {
      font-family: 'Poppins', sans-serif;
      background: ${({ theme }) => theme.colors.body}
      color: hsl(192, 100%, 9%);
      font-size: 1.15em;
      margin: 0;
      padding: 0;
      background-image: url("src/assets/images/bg-start.webp");
      background-repeat: no-repeat;
      background-size: cover;
   }
`;

export default GlobalStyles;
