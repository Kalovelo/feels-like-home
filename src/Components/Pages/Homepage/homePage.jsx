import React, { useRef, useEffect, useState } from "react";
import Parallax from "../../Images/Parallax";
import apostoles1 from "../../Images/apostoles1.png";
import apostoles2 from "../../Images/apostoles2.jpg";
import Lightbox from "react-image-lightbox";
import anime from "animejs/lib/anime.es.js";
import { useSelector } from "react-redux";
const images = [apostoles1, apostoles2];
const HomePage = () => {
  
  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false,
    showParallax: Parallax
  });

  const theme = useSelector(state => state.theme);

  const informationRef = useRef(null);
  const headtitleRef = useRef(null);
  const imageRefs = [useRef(null), useRef(null)];
  const timeline = anime.timeline();

  const informationAnimation = () => {
    return {
      targets: ".homepage__introduction-text",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2000,
      complete: () => {
        animateImages();
      }
    };
  };

  useEffect(() => {
    document.title = "Apostolos Kalovelonis | Design & Development enthusiast";
    scatterAnimation();
    timeline.add(informationAnimation());
  }, []);

  const scatterAnimation = () => {
    var textWrapper = document.querySelector(".homepage__headtitle");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    timeline
      .add({
        targets: " .letter",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function(el, i) {
          return 150 * (i + 1);
        }
      })
      .add({
        targets: ".homepage__subtitle",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1500
      });
  };

  const hoverCTAAnimation = () => {
    anime({
      targets: "body",
      backgroundColor: "#232323",
      duration: 1000,
      easing: "linear",
      color: "#fff"
    });
  };

  const animateImages = () => {
    console.log(imageRefs[0]);
    anime(curveMovementAnimation(imageRefs[0].current, [-500, 0], [500, 0]));
    anime(curveMovementAnimation(imageRefs[1].current, [800, 0], [-700, 0]));
  };

  const curveMovementAnimation = (target, valueX, valueY) => {
    return {
      targets: target,
      translateX: { value: valueX, duration: 6000 },
      opacity: { value: 1, duration: 7000 },
      translateY: { value: valueY, duration: 7000 },
      easing: "easeInOutBack"
    };
  };

  const resetCTAHoverAnimation = () => {
    anime({
      targets: "body",
      backgroundColor: "#fff",
      duration: 1000,
      easing: "linear",
      color: "#4b4b4b"
    });
  };

  const { photoIndex, isOpen } = state;
  return (
    <div className="homepage" fluid="true">
      <div className="homepage__title-wrapper">
        <h1 ref={headtitleRef} className="homepage__headtitle">
          <span className="letters">Hey there, it's Apostoles. </span>
        </h1>
        <h2 className="homepage__subtitle">Front-End Dev.</h2>
      </div>
      <div className="halfRow homepage__introduction-wrapper">
        <div ref={informationRef} className="homepage__introduction-text">
          <h2 className="homepage__introduction-title">Greetings, stranger!</h2>
          <p>
            My name is Apostolos Kalovelonis, coming straight out of the olives
            and oregano country, <b>Greece</b>. I am keen on clean interfaces,
            high score numbers & self - improvement.
          </p>
          <p>
            Currently studying for Google Summer of Code and working as a
            freelancer. You can find me at
            <b> local meetups</b> about content - marketing or development,
            reading peacefully a book on public transport, or jogging by the
            sea.
          </p>
        </div>

        <div className="homepage__introduction-all-image-wrapper">
          <div className="homepage__introduction-image">
            <img
              alt="myself in side view, pointing at something, low angle"
              src={apostoles1}
              onClick={() =>
                setState(prevState => ({
                  ...prevState,
                  isOpen: true,
                  photoIndex: 0
                }))
              }
              ref={imageRefs[0]}
            />
          </div>

          <div className="homepage__introduction-image homepage__introduction-image--second">
            <img
              alt="myself laying on the ground while laughing with eyes closed and my hand on chest"
              src={apostoles2}
              onClick={() =>
                setState(prevState => ({
                  ...prevState,
                  isOpen: true,
                  photoIndex: 1
                }))
              }
              ref={imageRefs[1]}
            />
          </div>
        </div>
      </div>

      <div className="homepage__cta-wrapper">
        <div
          className="homepage__cta-innerWrapper"
          onMouseOver={hoverCTAAnimation}
          onMouseLeave={resetCTAHoverAnimation}
        >
          <span className="homepage__cta-title">Up for a walk?</span>
          <h3 className="homepage__cta">PROCEED</h3>
        </div>
      </div>

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
    </div>
  );
};

export default HomePage;
