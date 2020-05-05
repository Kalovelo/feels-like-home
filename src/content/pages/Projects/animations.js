import anime from "animejs/lib/anime.es.js"

const animateSpawn = targets => {
  anime({
    targets: targets[0],
    opacity: {
      value: [0, 1],
      duration: 150
    },
    translateY: ["-70vh", 0],
    delay: 200,
    duration: 200,
    easing: "spring(1, 80, 10, 0)",
    begin: () =>
      anime({
        targets: targets[1],
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

const animateFadeAway = (timeline, targets) =>
  timeline
    .add({
      targets: targets[0],
      translateY: "-70vh",
      duration: 300,
      easing: "linear"
    })
    .add({
      targets: targets[1],
      translateX: 200,
      opacity: {
        value: 0,
        duration: 400
      },
      duration: 400,
      easing: "linear"
    })

export { animateSpawn, animateFadeAway }
