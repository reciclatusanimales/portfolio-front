import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Button from "../layout/button/Button.component"

import Typewriter from "../layout/typewriter/Typewriter.component"
import { Header, Center, Info, Img, Title, Photo } from "./Hero.stlyes"

import { Underline } from "../layout/layout/Layout.styles"
import ThemeContext from "../../context/ThemeContext"

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

const text = [
  "ReactJS",
  "Redux",
  "Gatsby",
  "Next.js",
  "Express.js",
  "Firebase",
  "Django",
  "Laravel",
]

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  const { resumeURL } = useContext(ThemeContext)

  return (
    <Header>
      <Center>
        <Info>
          <Title>
            <Underline style={{ marginLeft: 0 }} />
            <h1>Daniel Reyes Veas</h1>
            <h4>Programador Fullstack</h4>

            <Typewriter text={text} />

            <Button to={resumeURL} target="_blank" link>
              cv
            </Button>
          </Title>
        </Info>
        <Img>
          <Photo fluid={fluid} />
        </Img>
      </Center>
    </Header>
  )
}

export default Hero
