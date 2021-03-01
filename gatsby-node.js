const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
    {
      allProjects {
        nodes {
          pk
        }
      }
    }
  `)

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
