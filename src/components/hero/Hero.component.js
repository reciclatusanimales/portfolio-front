import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Button from "../layout/button/Button.component"

import {
  Header,
  HeroCenter,
  HeroInfo,
  HeroImg,
  HeroTitle,
  HeroPhoto,
} from "./Hero.stlyes"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Header>
      <HeroCenter className="section-center">
        <HeroInfo>
          <HeroTitle>
            <div className="underline"></div>
            <h1>Daniel Reyes Veas</h1>
            <h4>programador fullstack</h4>
            <Button to="/contact">contacto</Button>
            {/* <SocialLinks /> */}
          </HeroTitle>
        </HeroInfo>
        <HeroImg>
          <HeroPhoto fluid={fluid} className="hero-photo" />
        </HeroImg>
      </HeroCenter>
    </Header>
  )
}

export default Hero