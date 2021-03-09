import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import Fade from "react-reveal/Fade"
import ReactTooltip from "react-tooltip"
import ProjectArchive from "../components/projectArchive/projectArchive"
import { analytics } from "../components/helmet/analytics"
import Layout from "../components/layout/layout"
import Skills from "../components/skills/skills"
import { skillsAnimation } from "./portfolio/animations"
import { communityTable } from "./portfolio/data"
import "./portfolio/portfolio.scss"

const Background = () => {
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    skillsAnimation()
  }, [])

  const SEO = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Earth Herself</title>
      <meta
        name="description"
        content="Information about the technologies I use and the communities I am part of"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://kalovelo.com/background" />
      <script>{analytics}</script>
      <meta property="og:image" content="https://kalovelo.com/SEO/meta_img.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />{" "}
    </Helmet>
  )

  return (
    <Layout>
      <SEO />
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
