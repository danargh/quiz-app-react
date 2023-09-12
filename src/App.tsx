// import { useState } from 'react';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.styled';

function App() {
   const theme = {
      colors: {
         header: '#ebfbff',
         body: '#fff',
         footer: '#003333',
      },
      mobile: '768px',
   };

   return (
      <>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Home />
         </ThemeProvider>
      </>
   );
}

export default App;
