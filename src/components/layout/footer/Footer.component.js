import React, { useContext, useEffect } from "react"
import { FaFilePdf, FaGitAlt, FaGithub } from "react-icons/fa"
import ThemeContext from "../../../context/ThemeContext"

import {
  FooterContainer,
  FooterSocialIcons,
  FooterSocialIcon,
} from "./Footer.styles"

const Footer = () => {
  const { resumeURL } = useContext(ThemeContext)

  useEffect(() => {
    const date = document.querySelector("#date")
    date.innerHTML = new Date().getFullYear()
  }, [])

  return (
    <FooterContainer>
      <FooterSocialIcons>
        <li>
          <FooterSocialIcon
            href="https://github.com/reciclatusanimales/"
            target="_blank"
          >
            <FaGithub />
          </FooterSocialIcon>
        </li>
        <li>
          <FooterSocialIcon href={resumeURL} target="_blank">
            <FaFilePdf />
          </FooterSocialIcon>
        </li>
        <li>
          <FooterSocialIcon
            href="https://github.com/danielreyesveas/"
            target="_blank"
          >
            <FaGitAlt />
          </FooterSocialIcon>
        </li>
      </FooterSocialIcons>
      <p>
        &copy; <span id="date"></span> reciclatusanimales.com
      </p>
    </FooterContainer>
  )
}

export default Footer
