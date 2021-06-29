import React from "react"

import Layout from "../components/layout/layout/Layout.component"
import { graphql, useStaticQuery } from "gatsby"
import video from "../assets/code.mp4"
import poster from "../assets/code.gif"

import SEO from "../components/seo"
import {
  AboutCenter,
  AboutVideoContainer,
  AboutVideo,
  AboutInfo,
  AboutSection,
  AboutText,
  AboutTitle,
  Underline,
  AboutStack,
  AboutStackImg,
} from "../components/layout/layout/Layout.styles"

const About = () => {
  const {
    api: { allStacks: stacks },
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Sobre mí" description="about webdev" />
      <AboutSection>
        <AboutCenter>
          <AboutVideoContainer>
            <AboutVideo preload="auto" poster={poster} loop autoPlay muted>
              <source src={video} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </AboutVideo>
          </AboutVideoContainer>
          <AboutText>
            <AboutTitle>
              <h2>Sobre mí</h2>
              <Underline style={{ marginLeft: 0 }} />
            </AboutTitle>
            <AboutInfo>
              Comencé programando en PHP y Javascript, y luego utilizando los
              frameworks Laravel y AngularJS. Con bases de datos MySql, SQL
              Server y PostgreSQL. <br />
              Actualmente, me encuentro desarrollando en Python, con Django y en
              JS con Expres.js para construir backend, mientras que para el
              front, ReactJS, con Next.js, GatsbyJS, Redux y recientemente con
              React Native.
              {/* Lo que más me gusta del mundo de la programación es lo vasto que
              puede llegar a ser. <br />
              Vengo del mundo de la música, donde tampoco existen limitaciones
              para poder crear libremente, y eso representa para mí la mayor
              motivación al momento de ponerme a escribir código. */}
            </AboutInfo>
            <AboutStack>
              {stacks.map(item => (
                <AboutStackImg
                  src={item.image}
                  key={item.slug}
                  alt={item.name}
                />
              ))}
            </AboutStack>
          </AboutText>
        </AboutCenter>
      </AboutSection>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    api {
      allStacks {
        name
        category
        slug
        image
        order
      }
    }
  }
`
