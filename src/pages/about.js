import React from "react"

import Layout from "../components/layout/Layout.component"
import Title from "../components/title/Title.component"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const About = () => {
  const stack = [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "JAVASCRIPT" },
    { id: 4, title: "REACT" },
    { id: 5, title: "GATSBY" },
    { id: 6, title: "NODE" }
  ]
  const title = "About Me"
  const info = "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock"
  
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="About Me" description="about webdev" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}


export default About
