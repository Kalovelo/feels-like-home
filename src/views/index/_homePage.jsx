import anime from "animejs/lib/anime.es.js"
import { Link, useStaticQuery } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import Lightbox from "react-image-lightbox"
import { useDispatch } from "react-redux"
import Fade from "react-reveal/Fade"
import ProjectArchive from "../../components/projectArchive/projectArchive"
import apostoles1 from "../../content/Images/apostoles1.jpg"
import apostoles2 from "../../content/Images/apostoles2.jpg"
import { animateImages, informationAnimation, scatterAnimation } from "./animations"
import "./Homepage.scss"
import ReactMarkdown from "react-markdown"

const HomePage = props => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false
  })

  const informationRef = useRef(null)
  const headtitleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRefs = [useRef(null), useRef(null)]
  const ctaRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      api {
        homepage {
          title
          subtitle
          introduction_title
          introduction
          primary_image {
            formats
            alternativeText
          }
          secondary_image {
            formats
            alternativeText
          }
        }
      }
    }
  `)

  const {
    title,
    subtitle,
    introduction_title,
    introduction,
    primary_image,
    secondary_image
  } = {
    ...data.api.homepage
  }

  const images = [
    primary_image.formats.large.url,
    secondary_image.formats.medium.url
  ]

  const windowExists = () => {
    if (typeof window !== "undefined") {
      return true
    } else {
      return false
    }
  }
  const timeline = windowExists() ? anime.timeline() : ""

  useEffect(() => {
    if (typeof window !== "undefined") {
      scatterAnimation(timeline, headtitleRef.current, subtitleRef.current)
      timeline.add(
        informationAnimation(() => animateImages(imageRefs), informationRef.current)
      )
    }
  }, [])

  const { photoIndex, isOpen } = state
  return (
    <div className="homepage">
      <section>
        <div className="homepage__title-wrapper">
          <h1 ref={headtitleRef} className="homepage__headtitle">
            <span className="letters">{title} </span>
          </h1>
          <h2
            ref={subtitleRef}
            style={{ opacity: 0 }}
            className="homepage__subtitle"
          >
            {subtitle}
          </h2>
        </div>
        <div className="halfRow homepage__introduction-wrapper">
          <div
            ref={informationRef}
            className="homepage__introduction-text"
            style={{ opacity: 0 }}
          >
            <h2 className="homepage__introduction-title">{introduction_title}</h2>
            <ReactMarkdown source={introduction} />
          </div>

          <div className="homepage__introduction-all-image-wrapper">
            <div className="homepage__introduction-image">
              <img
                alt={primary_image.alternativeText}
                src={primary_image.formats.large.url}
                onClick={() =>
                  setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    photoIndex: 0
                  }))
                }
                ref={imageRefs[0]}
              />
            </div>

            <div className="homepage__introduction-image homepage__introduction-image--second">
              <img
                alt={secondary_image.alternativeText}
                src={secondary_image.formats.medium.url}
                onClick={() =>
                  setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    photoIndex: 1
                  }))
                }
                ref={imageRefs[1]}
              />
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <ProjectArchive title={"Portfolio Highlights"} />
        <section className="homepage__cta-wrapper">
          <Link to="/portfolio" className="homepage__cta">
            Portfolio ›
          </Link>
        </section>
      </Fade>
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
    </div>
  )
}

export default HomePage
