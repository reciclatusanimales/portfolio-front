import React from "react"
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
import { Underline } from "../layout/layout/Layout.styles"

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
      <HeroCenter>
        <HeroInfo>
          <HeroTitle>
            <Underline style={{ marginLeft: 0 }} />
            <h1>Daniel Reyes Veas</h1>
            <h4>Programador Fullstack</h4>
            <Button to="/contact">contacto</Button>
          </HeroTitle>
        </HeroInfo>
        <HeroImg>
          <HeroPhoto fluid={fluid} />
        </HeroImg>
      </HeroCenter>
    </Header>
  )
}

export default Hero
