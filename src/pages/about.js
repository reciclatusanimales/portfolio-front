import React from "react"

import Layout from "../components/layout/layout/Layout.component"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import {
  AboutCenter,
  AboutImage,
  AboutInfo,
  AboutSection,
  AboutText,
  AboutTitle,
  Underline,
  WorkStack,
  WorkStackImg,
} from "../components/layout/layout/Layout.styles"

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
      <AboutSection>
        <AboutCenter>
          <AboutImage fluid={fluid} />
          <AboutText>
            <AboutTitle>
              <h2>{title}</h2>
              <Underline style={{ marginLeft: 0 }} />
            </AboutTitle>
            <AboutInfo>{info}</AboutInfo>
            <WorkStack>
              {stacks.map(item => (
                <WorkStackImg src={item.image} key={item.id} alt={item.name} />
              ))}
            </WorkStack>
          </AboutText>
        </AboutCenter>
      </AboutSection>
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
