import React, { useRef, useEffect, useState } from "react";
import Parallax from "../../Images/Parallax";
import apostoles1 from "../../Images/apostoles1.png";
import apostoles2 from "../../Images/apostoles2.jpg";
import Lightbox from "react-image-lightbox";
import anime from "animejs/lib/anime.es.js";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../reducers/themeActions";
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';

const images = [apostoles1, apostoles2];

const HomePage = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false,
    showParallax: Parallax,
  });

  const informationRef = useRef(null);
  const headtitleRef = useRef(null);
  const imageRefs = [useRef(null), useRef(null)];
  const ctaRef = useRef(null);
  const timeline = anime.timeline();

  useEffect(() => {
    document.title = "Apostolos Kalovelonis | Design & Development enthusiast";
    scatterAnimation();
    timeline.add(informationAnimation());
    // eslint-disable-next-line
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
        duration: 800,
        delay: function(el, i) {
          return 50 * (i + 1);
        }
      })
      .add({
        targets: ".homepage__subtitle",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 800
      });
  };

  const informationAnimation = () => {
    return {
      targets: ".homepage__introduction-text",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 700,
      begin: animateImages
    };
  };

  const animateImages = () => {
    anime(curveMovementAnimation(imageRefs[0].current, [-100, 0], [300, 0]));
    anime(curveMovementAnimation(imageRefs[1].current, [200, 0], [-300, 0]));
  };

  const curveMovementAnimation = (target, valueX, valueY) => {
    return {
      targets: target,
      translateX: { value: valueX, duration: 3000 },
      opacity: { value: 1, duration: 4000 },
      translateY: { value: valueY, duration: 4000 },
      easing: "easeInOutBack"
    };
  };

  const { photoIndex, isOpen } = state;
  return (
    <div className="homepage layout fade-in" >
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

      <div ref={ctaRef} className="homepage__cta-wrapper">
      <ScrollAnimation animateOnce duration={1.5} animateIn="fade-in">
        <div
          className="homepage__cta-innerWrapper "
          onMouseEnter={() => dispatch(toggleTheme())}
          onMouseLeave={() => dispatch(toggleTheme())}
        >
          <span className="homepage__cta-title">Up for a walk?</span>
          <NavLink to='/portal' onClick={() => dispatch(toggleTheme())} className="homepage__cta">PROCEED</NavLink>
        </div>
        </ScrollAnimation>
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
