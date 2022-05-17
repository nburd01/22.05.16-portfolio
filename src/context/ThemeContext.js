import React, {CreateContext, useState} from 'react';

export const ThemeContext = CreateContext();

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState('Hello world');

    return (
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;