import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout.component"
import Projects from "../components/projects/Projects.component"

import SEO from "../components/seo"

const ProjectsPage = ({
  data: {
    allProjects: { nodes: projects },
  },
}) => {

  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="proyectos" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allProjects{
      nodes{
        github
        id
        pk
        content
        description
        title
        url
        image
        stack{
          id
          slug
          name
          image
        }
      }
    }
  }
`

export default ProjectsPage
