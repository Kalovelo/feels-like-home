import React from "react";
import Button from "../../components/button";
import StatusSection from "./StatusSection";
import { Component } from "react";
import Parallax from "../../Images/Parallax";
import apostoles1 from "../../Images/apostoles1.png";
import apostoles2 from "../../Images/apostoles2.jpg";

import "./homepage.css";
class HomePage extends Component {
  state = {
    showParallax: Parallax
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    document.title = "Apostolos Kalovelonis | Design & Development enthusiast";
  }

  resize = () => {
    let currentHideNav = window.innerWidth <= 768;
    if (currentHideNav) {
      this.setState({ showParallax: "div" });
    } else this.setState({ showParallax: Parallax });
  };

  render() {
    return (
      <div className="homepage" fluid="true">
        <div className="homepage__title-wrapper">
          <h1 className="homepage__headtitle">Hey there, it's Apostoles.</h1>
          <h2 className="homepage__subtitle">Front-End Dev.</h2>
        </div>
        <div className="halfRow homepage__introduction-wrapper">
          <div className="homepage__introduction-text" xs="12 content">
            <h2>Greetings, stranger!</h2>
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
            <div class="homepage__button-wrapper">
              <Button
                class="button--square"
                link="/portal"
                text="Take a walk?"
              />
            </div>
          </div>

          <div className="homepage__introduction-all-image-wrapper">
            <div className="homepage__introduction-image">
              <a href="#img1">
                <img
                  alt="myself in side view, pointing at something, low angle"
                  src={apostoles1}
                />
              </a>
              <a href="#_" className="lightbox" id="img1">
                <img
                  src={apostoles1}
                  alt="myself in side view, pointing at something, low angle"
                />
              </a>
            </div>
            
            <div className="homepage__introduction-image homepage__introduction-image--second">
              <a href="#img2">
                <img
                  alt="myself laying on the ground while laughing with eyes closed and my hand on chest"
                  src={apostoles2}
                />
              </a>
              <a href="#_" className="lightbox" id="img2">
                <img
                  alt="myself laying on the ground while laughing with eyes closed and my hand on chest"
                  src={apostoles2}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
