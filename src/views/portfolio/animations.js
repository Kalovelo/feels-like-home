import anime from "animejs/lib/anime.es.js"

const tableAnimation = (visible, theme) =>
  visible
    ? anime({
        targets: ".portfolio__community-row",
        easing: "linear",
        duration: 100,
        complete: () => {
          anime({
            targets: ".portfolio__community-item",
            opacity: 1,
            easing: "linear",
            duration: 1000
          })
        }
      })
    : ""

const skillsAnimation = () =>
  anime({
    targets: ".portfolio__skill",
    opacity: [0, 1],
    scale: [0.8, 1],
    delay: (el, i) => 150 * (i + 1),
    duration: 1000,
    easing: "linear"
  })

export { skillsAnimation, tableAnimation }
