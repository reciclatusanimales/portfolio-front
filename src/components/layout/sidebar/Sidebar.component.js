import React from "react"
import { Link } from "gatsby"
import { FaFilePdf, FaGitAlt, FaGithubAlt, FaTimes } from "react-icons/fa"
import links from "../../../utils/links"

import {
  Side,
  CloseBtn,
  SidebarLinks,
  SidebarLink,
  SidebarSocialIcons,
  SidebarSocialIcon,
} from "./Sidebar.styles"

import ThemeContext from "../../../context/ThemeContext"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Side isOpen={isOpen}>
          <CloseBtn onClick={toggleSidebar}>
            <FaTimes />
          </CloseBtn>
          <SidebarLinks isOpen={isOpen}>
            {links.map(link => {
              return (
                <SidebarLink key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </SidebarLink>
              )
            })}
          </SidebarLinks>
          <SidebarSocialIcons>
            <li>
              <SidebarSocialIcon
                href="https://github.com/reciclatusanimales/"
                target="_blank"
              >
                <FaGithubAlt className="social-icon" />
              </SidebarSocialIcon>
            </li>
            <li>
              <SidebarSocialIcon href={theme.resumeURL} target="_blank">
                <FaFilePdf className="social-icon" />
              </SidebarSocialIcon>
            </li>
            <li>
              <SidebarSocialIcon
                href="https://github.com/danielreyesveas/"
                target="_blank"
              >
                <FaGitAlt className="social-icon" />
              </SidebarSocialIcon>
            </li>
          </SidebarSocialIcons>
        </Side>
      )}
    </ThemeContext.Consumer>
  )
}

export default Sidebar
