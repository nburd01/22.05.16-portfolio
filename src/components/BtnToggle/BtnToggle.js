import React, {useContext} from 'react'
import ThemeContext from '../../Context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


export default function BtnToggle() {
 
  const theme = useContext(ThemeContext);

  const mode = (theme.currentTheme === 'light') ?  
    <i> 
      <FontAwesomeIcon icon={faSun} size="2x"></FontAwesomeIcon>
    </i> 
    : 
    <i> 
    <FontAwesomeIcon icon={faMoon} size="2x"></FontAwesomeIcon>
  </i> 

  return (

    <div className='btn-toggle' onClick={theme.toggleTheme}>
      {mode}
      </div>
  )
}

//----------------------------------------------------------------

// export default function BtnToggle() {
 
//   const theme = useContext(ThemeContext);
//   const mode = (theme.currentTheme === 'light') ? 'Darkmode OFF' : 'Darkmode On'
//   const icon = theme === 'light' ? faSun : faMoon ;

//   return (
//     // <button className='btn-toggle' onClick={theme.toggleTheme}>{mode}</button>
    
//     <div className="btn-toggle"  onClick={theme.toggleTheme} icon={icon} size="2x" >
//     <i>
//       <FontAwesomeIcon onClick={theme.toggleTheme} icon={icon} size="2x">{mode}</FontAwesomeIcon>
//     </i>

// </div>
//   )
// }

//----------------------------------------------------------------


// import React, {useContext} from 'react'
// import { ThemeContext } from 'Context/ThemeContext'
// import './BtnToggle.css'

// export default function BtnToggle() {

//     const{toggleTheme, theme} = useContext(ThemeContext)

//   return (
//     <div 
//         onClick={toggleTheme}
//         className={theme ? 'btn-toggle dark' : 'btn-toggle light'}
//         >
//             {theme ? "light" : "dark"}
//     </div>
//   )
// }
//----------------------------------------------------------------


