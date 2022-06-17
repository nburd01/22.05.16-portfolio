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

    // const[show, setShow]= useState(true)
    // const controlNavbar = () => {
    //   if(window.scrollY > 1000) {
    //     setShow(false)
    //   } else {
    //     setShow(true)
    //   }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavbar)
    //   return () =>{
    //     window.removeEventListener('scroll', controlNavbar)
    //   }
    // },[])


      // -------------------SCROLL DISAPPEAR EFFECT---------------------------------

      // const [scrollDirection, setScrollDirection] = useState(null)
      // const [prevOffset, setPrevOffset] = useState(0)    
      
      // const toggleScrollDirection = () => {
      //    let scrollY = window.scrollY
      //    console.log(scrollY)
      //    if (scrollY === 0) {
      //        setScrollDirection("up")
      //       //  console.log(scrollY)
      //        console.log(setScrollDirection)
      //    }
      //    if (scrollY > prevOffset) {
      //        setScrollDirection("down")
      //    } else if (scrollY < prevOffset) {
      //        setScrollDirection("up")
      //    }
      //    setPrevOffset(scrollY)
      // }
      // useEffect(() => {
      //     window.addEventListener("scroll", toggleScrollDirection)
      //     return () => {
      //         window.removeEventListener("scroll", toggleScrollDirection)
      //     }
      // })    

  
// ---------------------SCROLL DISAPPEAR EFFECT---------------------------------

const [visibilityChange, setvisibilityChange] = useState(false);
const [prevOffset, setPrevOffset] = useState(0)    

  const changeNavbarVisibility = () =>{
    let scrollY = window.scrollY
    console.log(scrollY)


     if(window.scrollY >= 100){
       setvisibilityChange(true);
     }

     if (scrollY > prevOffset) {
      setvisibilityChange(true);

     }else{
      setvisibilityChange(false);
     }
    setPrevOffset(scrollY)

  };
  window.addEventListener('scroll', changeNavbarVisibility);


  return (
    // <div className="navbar">
    <div className={visibilityChange ? 'navbar_visibilityChange' : 'navbar'}>
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