import { createContext, useContext, useState, useEffect } from 'react';

import { DARK, LIGHT, USER_SETTINGS } from '@Constans';
import { UserSettings, Theme } from '@Types';

interface ContextThemeState {
  theme: Theme;
  changeTheme: () => void;
}

//we create context theme
const ContextTheme = createContext<ContextThemeState | undefined>(undefined);

//Provider of context theme
export const ContextThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(LIGHT);

  const conditionalTheme = theme === DARK ? LIGHT : DARK;

  useEffect(() => {
    const user_settings: UserSettings = JSON.parse(
      localStorage.getItem(USER_SETTINGS)
    );

    if (user_settings) {
      setTheme(user_settings.theme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const user_settings: UserSettings = {
      theme,
    };

    localStorage.setItem(USER_SETTINGS, JSON.stringify(user_settings));

    //remove the previous theme
    root.classList.remove(conditionalTheme);
    //add the new theme
    root.classList.add(theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(conditionalTheme);
  };

  return (
    <ContextTheme.Provider value={{ theme, changeTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};

export const useContextTheme = () => {
  const theme = useContext(ContextTheme);

  if (theme === undefined) {
    throw new Error('You must be whithin Provider context theme');
  }

  return theme;
};
