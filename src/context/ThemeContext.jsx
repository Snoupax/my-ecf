import { createContext, useState } from 'react';

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const color = theme === 'light' ? '#333' : '#FFF';
    const borderColor = theme === 'light' ? '#333' : '#FFF';
    const backgroundColor = theme === 'light' ? '#FFF' : '#333';

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.borderColor = borderColor;
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, color }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
