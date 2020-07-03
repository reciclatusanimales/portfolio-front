import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout.component"
import SEO from "../components/seo"

import BlogDetail from '../components/blog-detail/BlogDetail.component'

const BlogTemplate = ({ data }) => {

  const { title, description } = data.blog

  return (
    <Layout>
      <SEO title={title} description={description} />
      
      <BlogDetail blog={data.blog} />

    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: blogs(slug: { eq: $slug }) {
      content
      title
      description
      image
      category {
        id
        name
      }
    }
  }
`

export default BlogTemplate
