import anime from "animejs/lib/anime.es.js"

const scatterAnimation = timeline => {
  var textWrapper = document.querySelector(".homepage__headtitle")
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  )
  timeline
    .add({
      targets: " .letter",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 800,
      delay: function(el, i) {
        return 50 * (i + 1)
      }
    })
    .add({
      targets: ".homepage__subtitle",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 800
    })
}

const animateImages = imageRefs => {
  anime(curveMovementAnimation(imageRefs[0].current, [-100, 0], [300, 0]))
  anime(curveMovementAnimation(imageRefs[1].current, [200, 0], [-300, 0]))
}

const curveMovementAnimation = (target, valueX, valueY) => {
  return {
    targets: target,
    translateX: { value: valueX, duration: 3000 },
    opacity: { value: 1, duration: 4000 },
    translateY: { value: valueY, duration: 4000 },
    easing: "easeInOutBack"
  }
}

const informationAnimation = callback => {
  return {
    targets: ".homepage__introduction-text",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 700,
    begin: callback
  }
}

export { informationAnimation, scatterAnimation, animateImages }
