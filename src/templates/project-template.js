import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout/Layout.component"
import SEO from "../components/seo"

import ProjectDetail from "../components/project-detail/ProjectDetail.component"

const ProjectTemplate = ({ data }) => {
  const { getProject: project } = data.api
  const { title, subtitle } = project

  return (
    <Layout>
      <SEO title={title} description={subtitle} />

      <ProjectDetail project={project} />
    </Layout>
  )
}

export const query = graphql`
  query($id: Int!) {
    api {
      getProject(id: $id) {
        id
        title
        subtitle
        description
        content
        image
        imageUrl
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

export default ProjectTemplate
