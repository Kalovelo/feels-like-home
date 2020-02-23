import React, { useEffect } from "react"
import { useState, useRef } from "react"
import anime from "animejs/lib/anime.es.js"
import FloatingElements from "../components/floatingElements"
import { debounce } from "lodash"

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
        duration: 300
      },
      translateY: [-400, 0],
      delay: 200,
      duration: 200,
      easing: "spring(1, 80, 10, 0)",
      complete: () =>
        anime({
          targets: contentRef.current,
          translateX: [200, 0],
          opacity: {
            value: [0, 1],
            duration: 300
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
        duration: 800,
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
            <a href={currentProjectState.link}>Go</a>
          </div>
          <div>
            <span onClick={debounce(previousProject, 500)}>Previous</span>
            <span onClick={debounce(nextProject, 500)}>Next </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
