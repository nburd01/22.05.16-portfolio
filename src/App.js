import './style/index.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Tech from './components/Tech/Tech';



function App() {
  return (
    <div className="app">

        <Navbar />
        <About />
        <Tech />


    </div>
  );
}

export default App;
