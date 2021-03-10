const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const query = await graphql(`
    {
      api {
        allProjects {
          id
        }
      }
    }
  `)

  query.data.api.allProjects.forEach(project => {
    createPage({
      path: `/projects/${project.id}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        id: Number(project.id),
      },
    })
  })
}
