import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import { FaFilePdf, FaGitAlt, FaGithubAlt, FaTimes } from "react-icons/fa"
import links from "../../../utils/links"

import {
  Side,
  CloseBtn,
  SidebarLinks,
  SidebarSocialIcons,
  SidebarSocialIcon,
} from "./Sidebar.styles"

import ThemeContext from "../../../context/ThemeContext"

const Sidebar = () => {
  const { resumeURL, showSidebar, setShowSidebar } = useContext(ThemeContext)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  useEffect(() => {
    setShowSidebar(false)

    // eslint-disable-next-line
  }, [])

  return (
    <Side isOpen={showSidebar}>
      <CloseBtn onClick={toggleSidebar}>
        <FaTimes />
      </CloseBtn>
      <div>
        <SidebarLinks isOpen={showSidebar}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )
          })}
        </SidebarLinks>
        <SidebarSocialIcons isOpen={showSidebar}>
          <li>
            <SidebarSocialIcon
              href="https://github.com/reciclatusanimales/"
              target="_blank"
            >
              <FaGithubAlt />
            </SidebarSocialIcon>
          </li>
          <li>
            <SidebarSocialIcon href={resumeURL} target="_blank">
              <FaFilePdf />
            </SidebarSocialIcon>
          </li>
          <li>
            <SidebarSocialIcon
              href="https://github.com/danielreyesveas/"
              target="_blank"
            >
              <FaGitAlt />
            </SidebarSocialIcon>
          </li>
        </SidebarSocialIcons>
      </div>
    </Side>
  )
}

export default Sidebar
