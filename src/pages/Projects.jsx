import React, { useEffect } from "react"
import { useState, useRef } from "react"
import anime from "animejs/lib/anime.es.js"
import FloatingElements from "../Components/components/floatingElements"
import { debounce } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft as faAngleLeft,
  faChevronRight as faAngleRight
} from "@fortawesome/free-solid-svg-icons"
import { animateSpawn, animateFadeAway } from "./Pages/Projects/animations"
import { Layout } from "../Components/layout"

import { projects } from "./Pages/Projects/data"

const Projects = () => {
  useEffect(() => {
    document.title = "Notable Creations"
  }, [])

  useEffect(() => {
    animateSpawn(getCurrentAnimationTargets())
  })

  //Refs
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const getCurrentAnimationTargets = () => [imageRef.current, contentRef.current]

  //animation
  const animationTimeline = anime.timeline()

  //Data

  const nextProject = () => {
    animateFadeAway(
      animationTimeline,
      getCurrentAnimationTargets()
    ).finished.then(() => updateIndex("next"))
  }

  const previousProject = () => {
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

  const [currentProjectState, updateState] = useState({
    ...projects[0],
    index: 0
  })

  return (
    <Layout>
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
                onClick={debounce(previousProject, 1000)}
              >
                <FontAwesomeIcon className="Projects__fa" icon={faAngleLeft} />
                <span className="Projects__controller-text">Previous</span>
              </span>
              <span
                className="Projects__controller"
                onClick={debounce(nextProject, 1000)}
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
