import { useStaticQuery } from "gatsby"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Fade from "react-reveal/Fade"
import ReactTooltip from "react-tooltip"
import Layout from "../components/layout/layout"
import ProjectArchive from "../components/projectArchive/projectArchive"
import SEO from "../components/seo/seo"
import Skills from "../components/skills/skills"
import { skillsAnimation } from "../views/portfolio/animations"
import { communityTable } from "../views/portfolio/data"
import "../views/portfolio/portfolio.scss"
import ReactMarkdown from "react-markdown"

const Background = ({ location }) => {
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    skillsAnimation()
  }, [])

  const data = useStaticQuery(graphql`
    query {
      api {
        portfolio {
          description
          seo_title
          seo_description
        }
      }
    }
  `)

  const { description, seo_title, seo_description } = { ...data.api.portfolio }

  return (
    <Layout>
      <SEO url={location.href} title={seo_title} description={seo_description} />
      <div className="background">
        <section className="background__description">
          <ReactMarkdown source={description} />
        </section>
        <Skills />
        <Fade>
          <section>
            <h2 className="background__subtitle">Communities</h2>
            <table className="background__communities">
              <thead>
                <tr className="background__community-row">
                  {communityTable.attributes.map((attribute, index) => (
                    <th
                      className="background__community-item background__community-item--head"
                      key={index}
                    >
                      {attribute}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {communityTable.content.map((element, index) => (
                  <tr
                    key={index}
                    className="background__community-row background__community-row--content"
                  >
                    {element.data.map((dataItem, index) => (
                      <td className="background__community-item" key={index}>
                        {dataItem}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </Fade>
        <ReactTooltip effect="solid" place="bottom" />
      </div>

      <ProjectArchive title={"Notable projects"} />
    </Layout>
  )
}

export default Background
