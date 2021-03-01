import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import {
  AboutCenter,
  AboutImg,
  AboutInfo,
  AboutTitle,
  AboutPhoto,
} from "../about/About.styles"
import { Section, Underline } from "../layout/layout/Layout.styles"

const query = graphql`
  {
    file(relativePath: { eq: "about-img.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Section>
      <AboutCenter>
        <AboutImg>
          <AboutPhoto fluid={fluid} />
        </AboutImg>
        <AboutInfo>
          <AboutTitle>
            <h2>Sobre mí</h2>
            <Underline style={{ marginLeft: 0 }} />
          </AboutTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
            vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
            expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
            officiis maxime?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
            vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
            expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
            officiis maxime?
          </p>
        </AboutInfo>
      </AboutCenter>
    </Section>
  )
}

export default About
