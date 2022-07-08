function getCurrentTheme(){
    let themeContext = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    localStorage.getItem('dark.theme') ? theme = localStorage.getItem('dark.theme') : theme = localStorage.getItem('light.theme');

    return theme;
  }

  export default getCurrentTheme()

// -----------------------------------------------------
// import React, {createContext, useState} from 'react'

// export const ThemeContext = createContext();

// const ThemeContextProvider = (props) => {

//     const [theme, setTheme] = useState(true) ;

//     const toggleTheme = () => {
//         setTheme(!theme)
//     }

//     return (
//         <ThemeContext.Provider value={{theme, toggleTheme }}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }

// export default ThemeContextProvider;