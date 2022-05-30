import './style/index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Tech from './components/Tech/Tech';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (

    
    <div className="app">
          <Navbar />

      <div className="app-container">

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