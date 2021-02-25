import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout/Layout.component"
import Blogs from "../components/blogs/Blogs.component"

import SEO from "../components/seo"

const Blog = ({
  data: {
    allBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allBlogs {
      nodes {
        slug
        content
        description
        category {
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
export default Blog
