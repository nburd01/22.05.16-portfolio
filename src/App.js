import './style/index.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom'




function App() {
  return (

      <div className="app">

              <Navbar />
             <Routes>
                 <Route path='/' element ={< About/>} />
                 <Route path='/tech/' element ={< Tech/>} />
                 <Route path='/portfolio/' element ={< Portfolio/>} />
                 <Route path='/resume/' element ={< Resume/>} />
                 <Route path='/services/' element ={< Services/>}>
                 </Route>
                 <Route path='/contact/' element ={< Contact/>} />
                 <Route
                   path="*"
                   element={
                     <main style={{ padding: "1rem" }}>
                       <p>There's nothing here!</p>
                     </main>
                   }
                 />
               </Routes>
               <Footer  />
      </div>
       );
     }
    
     export default App;