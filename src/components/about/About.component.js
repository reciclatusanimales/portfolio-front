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
import { FadeInBottom, FadeInRight } from "../layout/scroll/Scroll.styles"

const query = graphql`
  {
    file(relativePath: { eq: "about-img.webp" }) {
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
        <FadeInBottom>
          <AboutImg>
            <AboutPhoto fluid={fluid} />
          </AboutImg>
        </FadeInBottom>
        <FadeInRight>
          <AboutInfo>
            <AboutTitle>
              <h2>Sobre mí</h2>
              <Underline style={{ marginLeft: 0 }} />
            </AboutTitle>
            <p>
              ¡Hola! Me llamo Daniel Reyes, aunque todo el mundo me dice ‘Tuto’.
              Tengo 32 años y soy chileno, pero actualmente resido en Málaga,
              España.
            </p>
            <p>
              Desde que terminé mis estudios de Programación en 2017, he
              trabajado en distintas empresas, en las que he tenido la
              oportunidad de adquirir nuevos conocimientos y ponerlos en
              práctica desarrollando aplicaciones del mundo real. Asimismo, he
              integrado equipos de desarrollo de proyectos, lo que me ha
              permitido
            </p>
            <p>
              Comencé programando en PHP y Javascript, ...y luego utilizando los
              frameworks Laravel y AngularJS. Con bases de datos MySql, SQL
              Server y
            </p>
          </AboutInfo>
        </FadeInRight>
      </AboutCenter>
    </Section>
  )
}

export default About
