import React, { useEffect } from "react"
import { FaFilePdf, FaGitAlt, FaGithub } from "react-icons/fa"
import ThemeContext from "../../../context/ThemeContext"

import {
  FooterContainer,
  FooterSocialIcons,
  FooterSocialIcon,
} from "./Footer.styles"

const Footer = () => {
  useEffect(() => {
    const date = document.querySelector("#date")
    date.innerHTML = new Date().getFullYear()
  }, [])

  return (
    <ThemeContext.Consumer>
      {theme => (
        <FooterContainer>
          <FooterSocialIcons>
            <li>
              <FooterSocialIcon
                href="https://github.com/reciclatusanimales/"
                target="_blank"
              >
                <FaGithub className="social-icon" />
              </FooterSocialIcon>
            </li>
            <li>
              <FooterSocialIcon href={theme.resumeURL} target="_blank">
                <FaFilePdf className="social-icon" />
              </FooterSocialIcon>
            </li>
            <li>
              <FooterSocialIcon
                href="https://github.com/danielreyesveas/"
                target="_blank"
              >
                <FaGitAlt className="social-icon" />
              </FooterSocialIcon>
            </li>
          </FooterSocialIcons>
          <p>
            &copy; <span id="date"></span> reciclatusanimales.com
          </p>
        </FooterContainer>
      )}
    </ThemeContext.Consumer>
  )
}

export default Footer
