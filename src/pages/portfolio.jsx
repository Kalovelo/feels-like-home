import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import Fade from "react-reveal/Fade"
import ReactTooltip from "react-tooltip"
import ProjectArchive from "../components/projectArchive/projectArchive"
import Layout from "../components/layout/layout"
import Skills from "../components/skills/skills"
import { skillsAnimation } from "./portfolio/animations"
import { communityTable } from "./portfolio/data"
import "./portfolio/portfolio.scss"
import SEO from "../components/seo/seo"

const Background = () => {
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    skillsAnimation()
  }, [])

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Technologies I use, the communities I am part of, and notable projects"
      />
      <div className="background">
        <section>
          <p className="background__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries.
          </p>
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
