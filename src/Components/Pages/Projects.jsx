import React, { useEffect } from "react"
import { useState, useRef } from "react"
import anime from "animejs/lib/anime.es.js"
import FloatingElements from "../components/floatingElements"
import { debounce } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft as faAngleLeft,
  faChevronRight as faAngleRight
} from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  useEffect(() => {
    document.title = "Notable Creations"
  }, [])

  useEffect(() => {
    animateSpawn()
  })

  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const animationTimeline = anime.timeline()

  const projects = [
    {
      title: "Cards Against Humanity",
      description:
        "A University project based on the ice-breaker board game made by my colleagues Joj0s, Giapa and me. Stay tuned for its up and running online deployment.",
      tags: ["VueJS", "SocketIO", "Flask"],
      link: "https://github.com/iee-ihu-gr-course1941/ADISE19_ieeediots"
    },
    {
      title: "LOLOLO",
      description:
        "A University project based on the ice-breaker board game made by my colleagues Joj0s, Giapa and me. Stay tuned for its up and running online deployment.",
      tags: ["VueJS", "SocketIO", "Flask"],
      link: "https://github.com/iee-ihu-gr-course1941/ADISE19_ieeediots"
    }
  ]

  const animateSpawn = () => {
    anime({
      targets: imageRef.current,
      opacity: {
        value: [0, 1],
        duration: 150
      },
      translateY: [-400, 0],
      delay: 200,
      duration: 100,
      easing: "spring(1, 80, 10, 0)",
      begin: () =>
        anime({
          targets: contentRef.current,
          translateX: [200, 0],
          delay: 250,
          opacity: {
            value: [0, 1],
            duration: 800
          },
          duration: 300,
          easing: "linear"
        })
    })
  }

  const animateFadeAway = () =>
    animationTimeline
      .add({
        targets: imageRef.current,
        translateY: -500,
        duration: 300,
        easing: "linear"
      })
      .add({
        targets: contentRef.current,
        translateX: 200,
        opacity: {
          value: 0,
          duration: 400
        },
        duration: 400,
        easing: "linear"
      })

  const nextProject = () => {
    animateFadeAway().finished.then(() => updateIndex("next"))
  }

  const previousProject = () => {
    animateFadeAway().finished.then(() => updateIndex("previous"))
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
    <div className="Projects layout fade-in">
      <FloatingElements num={3} />
      <div className="Projects__wrapper">
        <div className="Projects__image" ref={imageRef}></div>
        <div className="Projects__content" ref={contentRef} style={{ opacity: 0 }}>
          <h3 className="Projects__title">{currentProjectState.title}</h3>
          <p className="Projects__description">{currentProjectState.description}</p>
          <p className="Projects__tags">
            {currentProjectState.tags.map(tag => (
              <span>#{tag} </span>
            ))}
          </p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={currentProjectState.link}
              className="Projects__cta"
            >
              Github
            </a>
          </div>
          <div className="Projects__controller-wrapper">
            <span
              className="Projects__controller"
              onClick={debounce(previousProject, 500)}
            >
              <FontAwesomeIcon className="Projects__fa" icon={faAngleLeft} />
              <span className="Projects__controller-text">Previous</span>
            </span>
            <span
              className="Projects__controller"
              onClick={debounce(nextProject, 500)}
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
  )
}

export default Projects
