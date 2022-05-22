import './style/index.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">

        <Navbar />
        <About />
        <Tech />
        <Portfolio />
        <Resume  />
        <Services  />
        <Contact  />
        <Footer  />
    </div>
  );
}

export default App;
