import anime from "animejs/lib/anime.es.js"

const scatterAnimation = (timeline, title, subtitle) => {
  var textWrapper = title
  title.style.opacity = 1
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  )
  timeline
    .add({
      targets: " .letter",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 100,
      delay: function(el, i) {
        return 50 * (i + 1)
      }
    })
    .add({
      targets: subtitle,
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 400
    })
}

const animateImages = imageRefs => {
  anime(curveMovementAnimation(imageRefs[0].current, [-100, 0], [300, 0]))
  anime(curveMovementAnimation(imageRefs[1].current, [200, 0], [-300, 0]))
}

const curveMovementAnimation = (target, valueX, valueY) => {
  return {
    targets: target,
    translateX: { value: valueX, duration: 2000 },
    opacity: { value: 1, duration: 2500 },
    translateY: { value: valueY, duration: 2500 },
    easing: "easeInOutBack"
  }
}

const informationAnimation = (callback, information) => {
  return {
    targets: information,
    opacity: 1,
    easing: "easeInOutQuad",
    duration: 400,
    begin: callback
  }
}

export { informationAnimation, scatterAnimation, animateImages }
