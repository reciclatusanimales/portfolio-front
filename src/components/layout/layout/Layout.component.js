import React, { useContext, useEffect } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import { ThemeProvider } from "styled-components"

import Footer from "../footer/Footer.component"
import Navbar from "../navbar/Navbar.component"
import Sidebar from "../sidebar/Sidebar.component"

import { lightTheme, darkTheme } from "./themes"

import icon from "../../../assets/icon.png"
import useSeo from "../../../hooks/useSeo"
import ThemeContext from "../../../context/ThemeContext"
import { LayoutStyles } from "./Layout.styles"

const Layout = ({ children }) => {
  const seo = useSeo()

  const { title, description } = seo
  const { theme, firstLoad, setFirstLoad } = useContext(ThemeContext)

  useEffect(() => {
    setTimeout(() => setFirstLoad(false), 0)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: firstLoad ? "hidden" : "visible",
        }}
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon} />
      </Helmet>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <LayoutStyles />
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
