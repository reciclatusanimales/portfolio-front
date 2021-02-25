import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout/Layout.component"
import Hero from "../components/hero/Hero.component"
import Services from "../components/services/Services.component"
import About from "../components/about/About.component"
import Skills from "../components/skills/Skills.component"
import LatestWorks from "../components/latest-works/LatestWorks.component"

import SEO from "../components/seo"
import Contact from "../components/contact/Contact.component"

export default ({ data }) => {
  const {
    //   allBlogs: { nodes: blogs },
    allProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <About />
      <Services />
      {/* <Timeline /> */}
      <LatestWorks projects={projects} />
      <Contact />
      {/* <Skills /> */}
      {/* <Jobs /> */}
      {/* <Blogs blogs={blogs} title="latest articles" showLink /> */}
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
        stack {
          id
          slug
          name
          image
        }
      }
    }
    allBlogs(sort: { fields: created_at, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        description
        category {
          id
          name
        }
        created_at(formatString: "MMMM Do, YYYY")
        id
        title
        image
      }
    }
  }
`
