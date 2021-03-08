import React, { useRef, useEffect, useState } from "react"
//images
import apostoles1 from "../../../content/Images/apostoles1.jpg"
import apostoles2 from "../../../content/Images/apostoles2.jpg"

//store
import { useDispatch } from "react-redux"
import { toggleTheme } from "../../../reducers/themeActions"

//animations
import { scatterAnimation, informationAnimation, animateImages } from "./animations"

//components
import FloatingElements from "../../../components/components/floatingElements"
import anime from "animejs/lib/anime.es.js"
import Lightbox from "react-image-lightbox"
import { Link } from "gatsby"
import ProjectArchive from "../../../components/components/projectArchive"
import Skills from "../../../components/skills/skills"
import Fade from "react-reveal/Fade"

const HomePage = props => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false
  })

  const images = [apostoles1, apostoles2]
  const informationRef = useRef(null)
  const headtitleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRefs = [useRef(null), useRef(null)]
  const ctaRef = useRef(null)

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
            <span className="letters">Hey there, it's Apostoles. </span>
          </h1>
          <h2
            ref={subtitleRef}
            style={{ opacity: 0 }}
            className="homepage__subtitle"
          >
            Web Developer & CS Student.
          </h2>
        </div>
        <div className="halfRow homepage__introduction-wrapper">
          <div
            ref={informationRef}
            className="homepage__introduction-text"
            style={{ opacity: 0 }}
          >
            <h2 className="homepage__introduction-title">Greetings, stranger!</h2>
            <p className="homepage__paragraph">
              My name is Apostolos Kalovelonis, coming straight out of the olives and
              oregano country, <b>Greece</b>. I am keen on clean interfaces, high
              score numbers & self - improvement.
            </p>
            <p className="homepage__paragraph">
              Currently a CS student and working as a freelancer. You can find me at{" "}
              <b> local meetups</b>, reading peacefully a book on public transport,
              or jogging by the sea.
            </p>
          </div>

          <div className="homepage__introduction-all-image-wrapper">
            <div className="homepage__introduction-image">
              <img
                alt="myself in side view, pointing at something, low angle"
                src={apostoles1}
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
                alt="myself laying on the ground while laughing with eyes closed and my hand on chest"
                src={apostoles2}
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
