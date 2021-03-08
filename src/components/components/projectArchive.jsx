import { Link, useStaticQuery } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"

export default ({ title, filter_slug }) => {
  const projects_query = useStaticQuery(graphql`
    query {
      api {
        projects {
          brief: Brief
          primary {
            formats
          }
          title
          slug
        }
      }
    }
  `)

  const rest_projects = projects_query.api.projects.filter(
    project => project.slug != filter_slug
  )

  if (!rest_projects.length) return ""

  return (
    <Fade>
      <section className="projectArchive">
        <h2>{title}</h2>
        <div className="projectArchive__wrapper">
          {rest_projects.map((project, index) => (
            <Link
              to={`/portfolio/${project.slug}`}
              key={index}
              className="projectArchive__project"
            >
              <article>
                <figure className="projectArchive__image-wrapper">
                  <img src={project.primary.formats.small.url} />
                </figure>
                <h4>{project.title}</h4>
                <p>{project.brief}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Fade>
  )
}
