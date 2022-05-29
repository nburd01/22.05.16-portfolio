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
import BrandingSupport from 'components/Services/BrandingSupport/BrandingSupport';
import MobileResponsive from 'components/Services/MobileResponsive/MobileResponsive';
import Seo from 'components/Services/SEO/Seo';
import TailorApproach from 'components/Services/TailorApproach/TailorApproach';
import UserFriendly from 'components/Services/UserFriendly/UserFriendly';
import WebApps from 'components/Services/WebApps/WebApps';



function App() {
  return (
    // function App() {
    //   return (
    //     <div className="app">
    //         <Navbar />
    //           <Routes>
    //             <Route path='/' element ={< About/>} />
    //             <Route path='/tech/' element ={< Tech/>} />
    //             <Route path='/portfolio/' element ={< Portfolio/>} />
    //             <Route path='/resume/' element ={< Resume/>} />
    //             <Route path='/services/' element ={< Services/>}>
    //               <Route default path='/services/branding' element ={< BrandingSupport/>}/>
    //               <Route path='/services/responsive' element ={< MobileResponsive/>}/>
    //               <Route path='/services/seo' element ={< Seo/>}/>
    //               <Route path='/services/tailor-approach' element ={< TailorApproach/>}/>
    //               <Route path='/services/user-friendly' element ={< UserFriendly/>}/>
    //               <Route path='/services/wep-apps' element ={< WebApps/>}/>
    //             </Route>
    
    //             <Route path='/contact/' element ={< Contact/>} />
    //             <Route
    //               path="*"
    //               element={
    //                 <main style={{ padding: "1rem" }}>
    //                   <p>There's nothing here!</p>
    //                 </main>
    //               }
    //             />
    //           </Routes>
    //           <Footer  />
    //     </div>
    //   );
    // }
    
    // export default App;
    
    <div className="app">
        <Navbar />
        < About/>
        < Tech/>
        < Portfolio/>
        < Resume/>
          <Routes>
            <Route path='/services' element ={< Services/>}>
              <Route path='/services/seo' element ={< Seo/>}/>
              <Route path='/services/branding' element ={< BrandingSupport/>}/>
              <Route path='/services/responsive' element ={< MobileResponsive/>}/>
              <Route path='/services/tailor-approach' element ={< TailorApproach/>}/>
              <Route path='/services/user-friendly' element ={< UserFriendly/>}/>
              <Route path='/services/web-apps' element ={< WebApps/>}/>
            </Route>
          </Routes>
        < Contact/>
        <Footer  />
    </div>
  );
}

export default App;
