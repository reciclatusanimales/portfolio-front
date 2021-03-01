const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // const blogs = await graphql(`
  //   {
  //     allBlogs {
  //       nodes {
  //         slug
  //       }
  //     }
  //   }
  // `)

  const projects = await graphql(`
    {
      allProjects {
        nodes {
          pk
        }
      }
    }
  `)

  // blogs.data.allBlogs.nodes.forEach(blog => {
  //   createPage({
  //     path: `/blogs/${blog.slug}`,
  //     component: path.resolve(`src/templates/blog-template.js`),
  //     context: {
  //       slug: blog.slug,
  //     },
  //   })
  // })

  projects.data.allProjects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.pk}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        pk: project.pk,
      },
    })
  })
}
