import React from "react"
import x from "../../content/Images/desktop1.jpg"

export default () => {
  const data = [
    {
      image: x,
      title: "Colourful Presentation",
      brief: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      link: "#"
    },
    {
      image: x,
      title: "Colourful Presentation",
      brief: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s,`,
      link: "#"
    },
    {
      image: x,
      title: "Colourful Presentation",
      brief: "alala la la al l ala lalalalala alal",
      link: "#"
    }
  ]
  return (
    <section className="projectArchive">
      <h2>Projects</h2>
      <div className="projectArchive__wrapper">
        {data.map((project, index) => (
          <a href={project.link} key={index} className="projectArchive__project">
            <article>
              <figure className="projectArchive__image-wrapper">
                <img src={project.image} />
              </figure>
              <h4>{project.title}</h4>
              <p>{project.brief}</p>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
}
