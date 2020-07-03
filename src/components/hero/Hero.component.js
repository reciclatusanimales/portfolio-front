import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"

import { Header, HeroCenter, HeroInfo, HeroImg, HeroTitle, HeroPhoto } from './Hero.stlyes'

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (

    <Header>
    <HeroCenter className="section-center">
      <HeroInfo>
        <HeroTitle>
          <div className="underline"></div>
          <h1>i'm john</h1>
          <h4>freelance web and mobile UI/UX Designer</h4>
          <Link to="/contact" className="btn">
            contact
          </Link>
          {/* <SocialLinks /> */}
        </HeroTitle>
      </HeroInfo>
      <HeroImg>
        <HeroPhoto fluid={fluid} className="hero-photo" /> 
      </HeroImg>
    </HeroCenter>
  </Header>
  )
}

export default Hero
