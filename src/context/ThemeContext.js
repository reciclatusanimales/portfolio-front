import React, { createContext, useState, useEffect, useCallback } from "react"
import filesURL from "../utils/filesURL"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const { resume } = filesURL

  const [theme, setTheme] = useState(null)
  const [showSidebar, setShowSidebar] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)
  const [resumeURL, setResumeURL] = useState(resume.dark)

  const setMode = useCallback(
    mode => {
      window.localStorage.setItem("theme", mode)
      setTheme(mode)
      setResumeURL(resume[mode])
    },
    [resume]
  )

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
      setMode("dark")
    }
  }, [resume, setMode])

  const values = {
    theme,
    firstLoad,
    setFirstLoad,
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
