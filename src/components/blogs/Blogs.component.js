import React from "react"
import { Link } from "gatsby"

import Title from "../layout/title/Title.component"
import Blog from "../blog/Blog.component"
import { BlogsCenter } from "./Blogs.styles"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <BlogsCenter className="section-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </BlogsCenter>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs