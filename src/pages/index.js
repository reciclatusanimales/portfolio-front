import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout/Layout.component"
import Scroll from "../components/layout/scroll/Scroll.component"
import Hero from "../components/hero/Hero.component"
import Services from "../components/services/Services.component"
import About from "../components/about/About.component"
import LatestWorks from "../components/latest-works/LatestWorks.component"

import SEO from "../components/seo"
import Contact from "../components/contact/Contact.component"
import useScroll from "../hooks/useScroll"

export default ({ data }) => {
  const {
    api: { allProjects: projects },
    api: { allStacks: stacks },
  } = data

  const scroll = useScroll()

  return (
    <Layout>
      <SEO title="Reciclatusanimales" description="Inicio" />

      <Hero />

      <Scroll scroll={scroll}>
        <About />
      </Scroll>

      <Scroll scroll={scroll}>
        <Services stacks={stacks} />
      </Scroll>

      <Scroll scroll={scroll}>
        <LatestWorks projects={projects} />
      </Scroll>

      <Scroll scroll={scroll}>
        <Contact />
      </Scroll>
    </Layout>
  )
}

export const query = graphql`
  {
    api {
      allProjects {
        github
        id
        description
        title
        subtitle
        summary
        url
        featured
        image
        imageUrl
        thumbnail
        thumbnailUrl
        stack {
          id
          slug
          name
          featured
          image
        }
      }
      allStacks {
        name
        category
        slug
        image
        featured
        order
      }
    }
  }
`
