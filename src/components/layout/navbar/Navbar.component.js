import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"

import { FaAlignJustify } from "react-icons/fa"

import ThemeSwitch from "../theme-switch/ThemeSwitch.component"
import links from "../../../utils/links"

import { Nav, NavCenter, NavHeader, NavBtn, NavLinks } from "./Navbar.styles"
import { globalHistory as history } from "@reach/router"
import ThemeContext from "../../../context/ThemeContext"

const Navbar = () => {
  const {
    location: { pathname: path },
  } = history

  const { showSidebar, setShowSidebar } = useContext(ThemeContext)
  const [showTheme, setShowTheme] = useState(true)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

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
    <Nav id="nav">
      <NavCenter>
        <NavHeader>
          {showTheme && <ThemeSwitch />}
          <NavBtn
            type="button"
            id="nav-btn"
            onClick={toggleSidebar}
            aria-label="Menú Lateral"
          >
            <FaAlignJustify></FaAlignJustify>
          </NavBtn>
        </NavHeader>
        <NavLinks>
          {links.map(link => {
            return (
              <li key={link.id} className={path === link.url ? "active" : ""}>
                <Link to={link.url}>
                  <span>{link.text}</span>
                </Link>
              </li>
            )
          })}
        </NavLinks>
      </NavCenter>
    </Nav>
  )
}

export default Navbar
