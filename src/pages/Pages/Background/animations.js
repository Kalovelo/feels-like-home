import anime from "animejs/lib/anime.es.js"

const tableAnimation = (visible, theme) =>
  visible
    ? anime({
        targets: ".background__community-row",
        easing: "linear",
        duration: 100,
        complete: () => {
          anime({
            targets: ".background__community-item",
            opacity: 1,
            easing: "linear",
            duration: 1000
          })
        }
      })
    : ""

const skillsAnimation = () =>
  anime({
    targets: ".background__skill",
    opacity: [0, 1],
    scale: [0.8, 1],
    delay: (el, i) => 150 * (i + 1),
    duration: 1000,
    easing: "linear"
  })

export { skillsAnimation, tableAnimation }
