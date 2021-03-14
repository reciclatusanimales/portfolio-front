import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout/Layout.component"
import Projects from "../components/projects/Projects.component"

import SEO from "../components/seo"

const ProjectsPage = ({
  data: {
    api: { allProjects: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    api {
      allProjects {
        github
        id
        content
        description
        summary
        title
        url
        image
        imageUrl
        thumbnail
        thumbnailUrl
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

export default ProjectsPage
