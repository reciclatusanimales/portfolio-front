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
  const title = "Sobre mí"
  const info =
    "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock"

  const {
    api: { allStacks: stacks },
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="About Me" description="about webdev" />
      <AboutSection>
        <AboutCenter>
          <AboutVideoContainer>
            <AboutVideo preload="auto" poster={poster} loop autoPlay muted>
              <source src={video} type="video/mp4" />
              Your browser does not support HTML5 video.
            </AboutVideo>
          </AboutVideoContainer>
          <AboutText>
            <AboutTitle>
              <h2>{title}</h2>
              <Underline style={{ marginLeft: 0 }} />
            </AboutTitle>
            <AboutInfo>{info}</AboutInfo>
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
