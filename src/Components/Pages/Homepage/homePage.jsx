import React from "react";
import { Component } from "react";
import Parallax from "../../Images/Parallax";
import apostoles1 from "../../Images/apostoles1.png";
import apostoles2 from "../../Images/apostoles2.jpg";
import Lightbox from "react-image-lightbox";
import anime from 'animejs/lib/anime.es.js';
const images = [apostoles1, apostoles2];

class HomePage extends Component {
  state = {
    showParallax: Parallax
  };

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };

    this.headtitle = null;
  }

   timeline = null;

  componentDidMount() {
    document.title = "Apostolos Kalovelonis | Design & Development enthusiast";
    this.timeline = anime.timeline();
    this.scatterAnimation();
  }

  scatterAnimation() {
    var textWrapper = document.querySelector(".homepage__headtitle");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    this.timeline
    .add({
      targets: ' .letter',
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
          return 150 * (i + 1)
      }
  }).add({
    targets: '.homepage__subtitle',
    opacity: [0, 1],
    easing: "easeInOutSine",
    duration: 1500,
})
      
  }

  hoverCTAAnimation=()=>{
    anime({
    targets:'body',
    backgroundColor:"#232323",
    duration:1000,
    easing:'linear',
    color:"#fff",
  });

}

  resetCTAHoverAnimation=()=>{anime({
    targets:'body',
    backgroundColor:"#fff",
    duration:1000,
    easing:'linear',
    color:"#4b4b4b"
  })

}

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="homepage homepage--darkMode" fluid="true">
        <div className="homepage__title-wrapper">
          <h1 ref={h1 => (this.headtitle = h1)} className="homepage__headtitle">
          <span className="letters">Hey there, it's Apostoles.{" "}</span>
          </h1>
          <h2 className="homepage__subtitle">Front-End Dev.</h2>
        </div>
        <div className="halfRow homepage__introduction-wrapper">
          <div className="homepage__introduction-text">
            <h2 className="homepage__introduction-title">Greetings, stranger!</h2>
            <p>
              My name is Apostolos Kalovelonis, coming straight out of the
              olives and oregano country, <b>Greece</b>. I am keen on clean
              interfaces, high score numbers & self - improvement.
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
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>

            <div className="homepage__introduction-image homepage__introduction-image--second">
              <img
                alt="myself laying on the ground while laughing with eyes closed and my hand on chest"
                src={apostoles2}
                onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              />
            </div>
          </div>
        </div>

        <div className="homepage__cta-wrapper" >
          <div className="homepage__cta-innerWrapper" onMouseOver={this.hoverCTAAnimation} onMouseLeave={this.resetCTAHoverAnimation} >
          <span className="homepage__cta-title">
            Up for a walk?
          </span>
          <h3 className="homepage__cta">PROCEED</h3>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default HomePage;
