import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { AboutCenter, AboutImg, AboutInfo, AboutTitle, AboutPhoto } from "../about/About.styles"

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
    <section className="section about">
      <AboutCenter className="section-center">
        <AboutImg>
          <AboutPhoto fluid={fluid} />
        </AboutImg>
        <AboutInfo>
            <AboutTitle className="section-title">
                <h2>Sobre mí</h2>
                <div className="underline"></div>
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
            {/* <a href="about.html" className="btn about-btn">about me</a> */}
        </AboutInfo>
      </AboutCenter>
    </section>
  )
}

export default About
