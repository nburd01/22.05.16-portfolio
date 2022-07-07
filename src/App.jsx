// 1: Import
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import ThemeSelector from 'ThemeSelector';
import WebFont from 'webfontloader';
import About from './components/About/About';
import BtnToggle from './components/BtnToggle/BtnToggle';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import './style/index.css'

// 2: Create a container
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  // 3: Get the selected theme, font list, etc.
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  // 5: Render if the theme is loaded.
  return (
    <>
    {
            themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
          {/* <Navbar/> */}
           <BtnToggle/>
            <ThemeSelector setter={ setSelectedTheme } />
            <section>

              <About/>
            </section>
              <section className='three'>

           <Portfolio/>
              </section>
           <section>

            <Resume/>
           </section>
            <section>

            
            </section>
          <Contact/>
          <section>

           <Footer/>
          </section>
        </Container>
      </ThemeProvider>
    }
    
    </>
  );
}

export default App;