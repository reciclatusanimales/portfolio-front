import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout.component"
import SEO from "../components/seo"

import ProjectDetail from '../components/project-detail/ProjectDetail.component'

const ProjectTemplate = ({ data }) => {

  const { title, subtitle } = data.project

  return (
    <Layout>
      <SEO title={title} description={subtitle} />
      
      <ProjectDetail project={data.project} />

    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($pk: Int) {
    project: projects(pk: { eq: $pk }) {
      pk
      title
      subtitle
      description      
      content
      image
      stack{
        id
        slug
        name
        image
      }
    }
  }
`

export default ProjectTemplate
