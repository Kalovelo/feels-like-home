import React, { useRef, useEffect, useState } from "react"

import { Layout } from "../components/layout"
import x from "../content/Images/project_sample.png"
import whole from "../content/Images/project_sample_whole.png"
import Lightbox from "react-image-lightbox"

export default () => {
  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false
  })
  const images = [x, whole, x, x]

  useEffect(() => {
    console.log(state)
    state.isOpen
      ? (document.documentElement.style.overflowY = "hidden")
      : (document.documentElement.style.overflowY = "visible")
    return () => {
      document.documentElement.style.overflowY = "visible"
    }
  })

  const data = {
    title: "Colourful Presentation",
    summary: {
      title: "What",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a 
      type specimen book.`
    },
    featuredImage: x,
    wholeImage: whole,
    restImages: [x, x],
    stack: ["React", "Gatsby", "Strapi"],
    links: ["Live", "Repo"],
    goal: {
      title: "Why",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a 
      type specimen book.`
    },
    explanation: {
      title: "How",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a 
      type specimen book.`
    },
    explanation: {
      title: "How",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a 
      type specimen book.`
    }
  }

  const Brief = ({ title, description }) => {
    return (
      <div>
        <h3 className="project__subtitle">{title}</h3>
        <p>{description}</p>
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
      <main className="project">
        <h1 className="project__title">{data.title}</h1>
        <section className="project__main-section">
          <div className="project__main-summary">
            <Brief
              title={data.summary.title}
              description={data.summary.description}
            />
          </div>
          <div className="project__stack">
            <h4 className="project__subtitle">Stack</h4>
            <ul className="project__stack-list">
              {data.stack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project__stack project__stack--links">
            <h4 className="project__subtitle">Links</h4>
            <ul className="project__stack-list">
              {data.links.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <FullImage src={x} />
        <section className="project__double-section">
          <Brief title={data.goal.title} description={data.goal.description} />
          <Brief title={data.goal.title} description={data.goal.description} />
        </section>
        <section className="project__gallery">
          <img
            src={whole}
            onClick={() =>
              setState(prevState => ({
                ...prevState,
                isOpen: true,
                photoIndex: 1
              }))
            }
          />
          <img
            src={data.featuredImage}
            onClick={() =>
              setState(prevState => ({
                ...prevState,
                isOpen: true,
                photoIndex: 2
              }))
            }
          />
          <img
            src={x}
            onClick={() =>
              setState(prevState => ({
                ...prevState,
                isOpen: true,
                photoIndex: 3
              }))
            }
          />
        </section>
        <section className="project__post-section">
          <Brief title={data.summary.title} description={data.summary.description} />
        </section>
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
