import React, {useContext} from 'react'
import { ThemeContext } from 'Context/ThemeContext'
import './BtnToggle.css'

export default function BtnToggle() {

    const{toggleTheme, theme} = useContext(ThemeContext)

  return (
    <div 
        onClick={toggleTheme}
        className={theme ? 'btn-toggle dark' : 'btn-toggle light'}
        >
            {theme ? "light" : "dark"}
    </div>
  )
}
