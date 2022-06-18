import React, {useState, useEffect} from "react";
import './style/index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Tech from './components/Tech/Tech';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import useLocalStorage from 'use-local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import BtnToggle from 'components/BtnToggle/BtnToggle';
import ThemeContext from './Context/ThemeContext';

// import { products } from 'src/data.js';



function App() {
        const [currentTheme, setCurrentTheme] = useState(localStorage.selectTheme || 'light');

        useEffect (() => {
          localStorage.setItem('selectTheme', currentTheme)
        }, [currentTheme]);
         
 
  return (      
    
<ThemeContext.Provider value={{currentTheme, toggleTheme: () => {currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light")}}}>
      <div className={currentTheme === "light" ? "app light" : "app dark"}>

                <BtnToggle/>    
                <Navbar />
                        

                {/* <div className="app-container"> */}


                        <section className='one'>
                                <About />
                        </section>

                        <section className='two'>
                                <Tech />
                        </section>

                        <section className='three'>

                                <Portfolio  />

                        </section>

                        <section className='four'>
                                <Services  />
                        </section>

                        <section className='five'>
                                <Resume  />
                        </section>

                        <section className='six'>
                                <Contact  />
                        </section>

                        <section className='seven'>
                                <Footer  />
                        </section>

                {/* </div>  */}
 
        </div>
</ThemeContext.Provider>

       );
     }
    
     export default App;