import { createContext, useContext } from "react";

/* setting the themeContext with the default values as shown below */
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

/* exporting the themeprovider which will be the wrapper class */
export const ThemeProvider = ThemeContext.Provider;

/* import this when necessary, this returns the context and everything inside it can be accessed as needed */
export default function useTheme() {
  return useContext(ThemeContext);
}
