import React from "react"

import styled from "styled-components"
import Layout from "../components/layout/layout/Layout.component"
import Title from "../components/layout/title/Title.component"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"

export const WorkStackImg = styled.img`
  height: 40px !important;
  width: auto !important;
  margin: 5px;
  display: flex;
  align-items: center;
`

export const WorkStack = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }

  ${WorkStackImg} {
    display: inline-block;
    padding: 0.25rem 0.3rem;
  }
`

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
