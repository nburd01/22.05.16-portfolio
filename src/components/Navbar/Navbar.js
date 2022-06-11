import React,{useState, useEffect} from 'react'
import './Navbar.css'
import {HashLink as Link} from 'react-router-hash-link'


export default function Navbar() {
// -------------------TOGGLE NAV---------------------------------
  const[toggleMenu, setToggleMenu] = useState(false);
  const[width, setWidth] = useState(window.innerWidth)

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() =>  {

    const changeWidth = () => {
      setWidth(window.innerWidth);

      if(window.innerWidth < 1080){
        setToggleMenu(false);
      } 
    }
    
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])

// -------------------SCROLL EFFECT---------------------------------


  return (
    <div className="navbar">
      <div className="title-logo">
        <h1>
        <Link to='#about'>Niall Burdon</Link>
        </h1>
      </div>

      {/* <div className="navigation"> */}
        <nav>
            {(toggleMenu  || width > 1080) && (
                          
              <div className="list"> 

                    <Link to='#about' className='items'>Home </Link>
                

                    <Link to='#tech' className='items'>Tech </Link>
                  
                
                    <Link to='#portfolio' className='items'>Portfolio</Link>
                  
                
                    <Link to='#services' className='items'>Services</Link>
                  
                
                    <Link to='#resume' className='items'>Resume</Link>
                  
                
                    <Link to='#contact' className='items'>Contact</Link>
                  
              </div>
                  
             )}
            <div className="btn-div" onClick={toggleNavSmallScreen}>
              <div className="btn-burger" onClick={toggleNavSmallScreen} />
            </div>
        </nav>
      {/* </div> */}
    </div>
  )
}
