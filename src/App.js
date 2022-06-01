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



function App() {

         const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
        
         const switchTheme = () => {
                 const newTheme = theme === 'light' ? 'dark' : 'light';
                 setTheme(newTheme)
         }

         const icon = theme === 'light' ? faSun : faMoon ;
         
 
  return (
    
        <div className="app" data-theme={theme} >
                <div className="theme-toggle">

                        <div className="btn-toggle"  >
                        <i>
                        <FontAwesomeIcon onClick={switchTheme} icon={icon} size="2x"/>
                        </i>

                </div>
                        
                </div>

                <div className="app-container">

                                <Navbar />

                        <section className='one'>
                                <About />
                        </section>

                        <section className='two'>
                                <Tech />
                        </section>

                        <section className='three'>
                                <Services  />
                        </section>

                        <section className='four'>
                                <Portfolio  />
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

                </div> 
 
        </div>

       );
     }
    
     export default App;