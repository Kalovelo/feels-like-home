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

const typewriterAnimation = callback => {
  if (document.hasFocus())
    new anime.timeline()
      .add({
        targets: ".footer__CTA-concept-text",
        opacity: 1,
        duration: 300,
        easing: "easeOutExpo"
      })
      .add({
        targets: ".footer-letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        offset: "-=775",
        delay: (el, i) => 45 * (i + 1)
      })
      .add({
        targets: ".footer__CTA-concept-text",
        opacity: 0,
        duration: 700,
        easing: "easeOutExpo",
        delay: 400
      })
      .finished.then(callback)
}

const conceptLetterReplace = (text, currentText) => {
  if (text) {
    let textWrapper = text
    textWrapper.innerHTML = currentText.replace(
      // eslint-disable-next-line
      /([^\x00-\x80]|\w)/g,
      "<span class='footer-letter'>$&</span>"
    )
  }
}

export { conceptLetterReplace, typewriterAnimation, copyAnimation }
