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
        <Projects projects={projects} title="all projects" />
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
        description
        title
        url
        image
      }
    }
  }
`

export default ProjectsPage
