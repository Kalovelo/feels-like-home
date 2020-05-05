import anime from "animejs/lib/anime.es.js"
const copyAnimation = () =>
  anime
    .timeline()
    .add({
      targets: ".footer__copied",
      opacity: [0, 1],
      translateY: [200, 0],
      duration: 600,
      easing: "easeInOutSine"
    })
    .add({
      targets: ".footer__copied",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutSine"
    })

export { copyAnimation }
