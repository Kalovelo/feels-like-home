exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      api {
        projects {
          title
          slug
          description
          brief: Brief
          explanation: Explanation
          goal: Goal
          spotlight: Spotlight
          technologies {
            technology
          }
          links: Links {
            title
            url
          }

          primary {
            formats
            alternativeText
          }
          whole {
            formats
            alternativeText
          }
          rest_images {
            formats
            alternativeText
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  const projects = result.data.api.projects

  const ProjectArchive = require.resolve("./src/templates/project.jsx")

  projects.forEach((project, index) => {
    createPage({
      path: `portfolio/${project.slug}`,
      component: ProjectArchive,
      context: { ...project }
    })
  })
}
