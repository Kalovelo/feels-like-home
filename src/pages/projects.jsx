import React, { useEffect } from "react"
import { useState, useRef } from "react"
import anime from "animejs/lib/anime.es.js"
import FloatingElements from "../components/components/floatingElements"
import { debounce } from "lodash"

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft as faAngleLeft,
  faChevronRight as faAngleRight
} from "@fortawesome/free-solid-svg-icons"

import { Helmet } from "react-helmet"

import { animateSpawn, animateFadeAway } from "../content/pages/Projects/animations"
import { Layout } from "../components/layout"
import { projects } from "../content/pages/Projects/data"

const Projects = () => {
  //Mount
  useEffect(() => {
    return () => clearTimeout(clickRef.current)
  }, [])

  //Update
  useEffect(() => {
    animateSpawn(getCurrentAnimationTargets())
  })

  //State
  const [currentProjectState, updateState] = useState({
    ...projects[0],
    index: 0
  })

  //Refs
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const controllersRef = [useRef(null), useRef(null)]
  const clickRef = useRef(null)

  const getCurrentAnimationTargets = () => [imageRef.current, contentRef.current]

  //SEO
  const SEO = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Notable Projects</title>
      <meta
        name="description"
        content="Some of my notable projects. you can find more on github!"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://kalovelo.com/projects" />
    </Helmet>
  )
  //animation
  const animationTimeline = typeof window !== "undefined" ? anime.timeline() : ""

  const nextProject = () => {
    //do not allow any more click events for 2 secs
    clickDelay()

    animateFadeAway(
      animationTimeline,
      getCurrentAnimationTargets()
    ).finished.then(() => updateIndex("next"))
  }

  const clickDelay = () => {
    controllersRef[0].current.style.pointerEvents = "none"
    controllersRef[1].current.style.pointerEvents = "none"

    clickRef.current = window?.setTimeout(() => {
      controllersRef[0].current.style.pointerEvents = "initial"
      controllersRef[1].current.style.pointerEvents = "initial"
    }, 2000)
  }

  const previousProject = () => {
    clickDelay()
    animateFadeAway(
      animationTimeline,
      getCurrentAnimationTargets()
    ).finished.then(() => updateIndex("previous"))
  }

  const updateIndex = type => {
    let newIndex = currentProjectState.index
    if (type === "next")
      newIndex = currentProjectState.index === projects.length - 1 ? 0 : newIndex + 1
    else
      newIndex = currentProjectState.index === 0 ? projects.length - 1 : newIndex - 1
    updateState({
      ...projects[newIndex],
      index: newIndex
    })
  }
  return (
    <Layout>
      <SEO />
      <div className="Projects layout fade-in">
        <FloatingElements num={3} />
        <div className="Projects__wrapper">
          <div className="Projects__image" ref={imageRef}>
            {currentProjectState.logo}
          </div>
          <div className="Projects__content" ref={contentRef} style={{ opacity: 0 }}>
            <h3 className="Projects__title">{currentProjectState.title}</h3>
            <p className="Projects__description">
              {currentProjectState.description}
            </p>
            <p className="Projects__tags">
              {currentProjectState.tags.map((tag, index) => (
                <span key={index}>#{tag} </span>
              ))}
            </p>
            <div>
              {currentProjectState.links?.map((link, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                  className="Projects__cta"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <div className="Projects__controller-wrapper">
              <span
                className="Projects__controller"
                ref={controllersRef[0]}
                onClick={debounce(previousProject, 300)}
              >
                <FontAwesomeIcon className="Projects__fa" icon={faAngleLeft} />
                <span className="Projects__controller-text">Previous</span>
              </span>
              <span
                className="Projects__controller"
                ref={controllersRef[1]}
                onClick={debounce(nextProject, 300)}
              >
                <span className="Projects__controller-text">Next</span>
                <FontAwesomeIcon
                  className="Projects__controller-icon"
                  icon={faAngleRight}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
