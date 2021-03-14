import React, { useEffect, useState } from "react"
import Lightbox from "react-image-lightbox"
import ReactMarkdown from "react-markdown"
import Fade from "react-reveal/Fade"
import ProjectArchive from "../components/projectArchive/projectArchive"
import Layout from "../components/layout/layout"
import "./project/project.scss"
import SEO from "../components/seo/seo"

export default ({ pageContext }) => {
  const {
    title,
    slug,
    description,
    brief,
    explanation,
    goal,
    spotlight,
    technologies,
    links,
    primary,
    whole,
    rest_images
  } = { ...pageContext }

  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false
  })

  const images = [primary.url, whole.url, ...rest_images.map(image => image.url)]

  useEffect(() => {
    state.isOpen
      ? (document.documentElement.style.overflowY = "hidden")
      : (document.documentElement.style.overflowY = "visible")
    return () => {
      document.documentElement.style.overflowY = "visible"
    }
  })

  const Brief = ({ title, description }) => {
    return (
      <div>
        <h3 className="project__subtitle">{title}</h3>
        <ReactMarkdown source={description} />
      </div>
    )
  }

  const FullImage = ({ src, altText = null }) => {
    return (
      <div className="project__full-image">
        <img
          src={src}
          alt={altText}
          onClick={() =>
            setState(prevState => ({
              ...prevState,
              isOpen: true,
              photoIndex: 0
            }))
          }
        />
      </div>
    )
  }

  const { photoIndex, isOpen } = state
  return (
    <Layout>
      <SEO image={images[0]} title={title} description={brief} />
      <main className="project">
        <h1 className="project__title">{title}</h1>
        <section className="project__main-section">
          <div className="project__main-summary">
            <Brief title="Summary" description={description} />
          </div>
          <div className="project__stack">
            <h4 className="project__subtitle">Stack</h4>
            <ul className="project__stack-list">
              {technologies.map(({ technology }, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="project__stack project__stack--links">
            <h4 className="project__subtitle">Links</h4>
            <ul className="project__stack-list">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <FullImage altText={primary.alternativeText} src={images[0]} />
        </section>

        <Fade>
          <section className="project__double-section">
            <Brief title="Purpose" description={goal} />
            <Brief title="Strategy" description={explanation} />
          </section>
        </Fade>

        <Fade>
          <section className="project__gallery">
            <img
              alt={whole.alternativeText}
              src={images[1]}
              onClick={() =>
                setState(prevState => ({
                  ...prevState,
                  isOpen: true,
                  photoIndex: 1
                }))
              }
            />
            {rest_images.map((rest_image, index) => (
              <img
                alt={rest_image.alternativeText}
                src={images[index + 2]}
                onClick={() =>
                  setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    photoIndex: index + 2
                  }))
                }
              />
            ))}
          </section>
        </Fade>

        <Fade>
          <section className="project__post-section">
            <Brief title="Spotlight" description={spotlight} />
          </section>
        </Fade>

        <ProjectArchive title="Rest Works" filter_slug={slug} />
      </main>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() =>
            setState(prevState => ({ ...prevState, isOpen: false }))
          }
          onMovePrevRequest={() =>
            setState(prevState => ({
              ...prevState,
              photoIndex: (photoIndex + images.length - 1) % images.length
            }))
          }
          onMoveNextRequest={() =>
            setState(prevState => ({
              ...prevState,
              photoIndex: (photoIndex + 1) % images.length
            }))
          }
        />
      )}
    </Layout>
  )
}
