import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout/Layout.component"
import Hero from "../components/hero/Hero.component"
import Services from "../components/services/Services.component"
import About from "../components/about/About.component"
import LatestWorks from "../components/latest-works/LatestWorks.component"

import SEO from "../components/seo"
import Contact from "../components/contact/Contact.component"

export default ({ data }) => {
  const {
    allProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <About />
      <Services />
      <LatestWorks projects={projects} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    allProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        pk
        description
        title
        subtitle
        url
        image
        imageName
        stack {
          id
          slug
          name
          image
        }
      }
    }
  }
`
