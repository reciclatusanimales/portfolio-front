import React from "react"

import Layout from "../components/layout/layout/Layout.component"
import Title from "../components/layout/title/Title.component"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import {
  WorkStack,
  WorkStackImg,
} from "../components/latest-works/LatestWorks.styles"

const About = () => {
  const title = "Sobre mí"
  const info =
    "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock"

  const {
    file: {
      childImageSharp: { fluid },
    },
    allStacks: { nodes: stacks },
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
            <WorkStack>
              {stacks.map(item => (
                <WorkStackImg src={item.image} key={item.id} alt={item.name} />
              ))}
            </WorkStack>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    allStacks {
      nodes {
        name
        slug
        image
        order
      }
    }
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
