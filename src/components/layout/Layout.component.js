import React from "react"
import { Helmet } from 'react-helmet'
import PropTypes from "prop-types"

import { ThemeProvider } from 'styled-components'

import Footer from "../footer/Footer.component"
import Navbar from "../navbar/Navbar.component"
import Sidebar from "../sidebar/Sidebar.component"

import { useTheme } from '../../hooks/useTheme'
import { lightTheme, darkTheme } from './themes'

import icon from '../../images/icon.png'
import useSeo from '../../hooks/use-seo'

import { LayoutStyles } from '../layout/Layout.styles'

const Layout = ({ children }) => {

  const seo = useSeo();

  const { title, description } = seo;

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <>
      <Helmet>
        <title>{ title }</title>
        <meta name="description" content={description} />        
        <link rel="icon" href={icon} />
      </Helmet>
      <ThemeProvider theme={themeMode}>
        <LayoutStyles />
        <Navbar toggleSidebar={toggleSidebar} theme={theme} toggleTheme={toggleTheme}/>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
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
