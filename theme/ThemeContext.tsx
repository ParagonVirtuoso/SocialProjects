import React, {createContext, useState} from 'react';
import {darkTheme, lightTheme} from '../screens/styles/theme';

type ThemeContextType = {
  theme: any;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
