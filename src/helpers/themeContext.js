import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: '#ababab',
    color: `#c9c8c8`,
  });
  const [themeMode, setThemeMode] = useState('light');

  const toogleTheme = () => {
    if (themeMode === 'light') {
      setTheme({
        background: `#1d1c1c`,
        color: `#c9c8c8`,
      });
    } else {
      setTheme({
        background: `#c9c8c8`,
        color: `#1d1c1c`,
      });
    }
  };

  const switchTheme = mode => {
    setThemeMode(mode);
  };

  return (
    <ThemeContext.Provider
      value={{ toogleTheme, theme, themeMode, switchTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
