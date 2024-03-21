import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isItalic, setIsItalic] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const toggleItalic = () => {
    setIsItalic(prevItalic => !prevItalic)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isItalic, toggleItalic }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}