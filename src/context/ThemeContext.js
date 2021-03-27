import React, { createContext, useState, useEffect } from "react"
import filesURL from "../utils/filesURL"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const { resume } = filesURL

  const [theme, setTheme] = useState("light")
  const [showSidebar, setShowSidebar] = useState(false)
  const [resumeURL, setResumeURL] = useState(resume.light)

  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
    setResumeURL(resume[mode])
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")

    if (localTheme) {
      setTheme(localTheme)
      setResumeURL(resume[localTheme])
    } else {
      setMode("light")
    }
    // eslint-disable-next-line
  }, [])

  const values = {
    theme,
    toggleTheme,
    resumeURL,
    showSidebar,
    setShowSidebar,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeContextProvider }
