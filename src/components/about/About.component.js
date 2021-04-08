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
              integrado equipos de desarrollo de distintos tipos de proyectos,
              lo que me ha permitido desenvolverme en procesos y grupos de
              profesionales más complejos y diversos.
            </p>
            <p>
              Comencé programando en PHP y Javascript y luego utilizando los
              frameworks Laravel y AngularJS. Con bases de datos MySql, SQL
              Server y PostgreSQL. Actualmente, me encuentro desarrollando en
              Python, con Django y en JS con Expres.js para construir _backend_,
              mientras que para el _front_ me he inclinado por ReactJS, con
              Next.js, GatsbyJS, Redux y recientemente con React Native.
            </p>
          </AboutInfo>
        </FadeInRight>
      </AboutCenter>
    </Section>
  )
}

export default About
