import React from "react"
import { Link } from "gatsby"

import { FaTimes } from "react-icons/fa"

import links from "../../../utils/links"
import socialLinks from "../../../utils/socialLinks"

import {
  Side,
  CloseBtn,
  SidebarLinks,
  SidebarLink,
  SidebarSocialIcons,
  SidebarSocialIcon,
} from "./Sidebar.styles"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
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
        {socialLinks.map(link => {
          return (
            <li key={link.id}>
              <SidebarSocialIcon href={link.url}>{link.icon}</SidebarSocialIcon>
            </li>
          )
        })}
      </SidebarSocialIcons>
    </Side>
  )
}

export default Sidebar
