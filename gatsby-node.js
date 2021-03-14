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
            url
            formats
            alternativeText
          }
          whole {
            url
            formats
            alternativeText
          }
          rest_images {
            url
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
