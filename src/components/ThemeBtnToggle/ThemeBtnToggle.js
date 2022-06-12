import React, {useContext} from 'react'
import { ThemeContext } from 'Context/ThemeContext'
import './ThemeBtnToggle.css'

export default function BtnToggle() {

    const{toggleTheme, theme} = useContext(ThemeContext)


  return (
    <div 
        onClick={toggleTheme}
        className={theme ? 'theme-btn-toggle dark' : 'theme-btn-togglee light'}
        >
            {theme ? "light" : "dark"}
    </div>
  )
}
