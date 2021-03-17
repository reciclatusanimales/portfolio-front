import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { FaAlignJustify } from "react-icons/fa"

import ThemeSwitch from "../theme-switch/ThemeSwitch.component"

import links from "../../../utils/links"

import { Nav, NavCenter, NavHeader, NavBtn, NavLinks } from "./Navbar.styles"
import ThemeContext from "../../../context/ThemeContext"
import { globalHistory as history } from "@reach/router"

const Navbar = ({ toggleSidebar, theme, toggleTheme }) => {
  const {
    location: { pathname: path },
  } = history

  const [showTheme, setShowTheme] = useState(true)

  useEffect(() => {
    const navbar = document.querySelector("#nav")
    const fixNavbar = () => {
      if (window.pageYOffset > 80) {
        //navbar.classList.add("navbar-fixed");
        setShowTheme(false)
      } else {
        navbar.classList.remove("navbar-fixed")
        setShowTheme(true)
      }
    }
    window.addEventListener("scroll", fixNavbar)
    return () => {
      window.removeEventListener("scroll", fixNavbar)
    }
  }, [])

  return (
    <ThemeContext.Consumer>
      {theme => (
        <Nav id="nav">
          <NavCenter>
            <NavHeader>
              {showTheme && (
                <ThemeSwitch
                  theme={theme.theme}
                  toggleTheme={theme.toggleTheme}
                />
              )}
              <NavBtn type="button" id="nav-btn" onClick={toggleSidebar}>
                <FaAlignJustify></FaAlignJustify>
              </NavBtn>
            </NavHeader>
            <NavLinks>
              {links.map(link => {
                return (
                  <li
                    key={link.id}
                    className={path === link.url ? "active" : ""}
                  >
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                )
              })}
            </NavLinks>
          </NavCenter>
        </Nav>
      )}
    </ThemeContext.Consumer>
  )
}

export default Navbar
