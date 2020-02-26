import React from "react"
import { Button } from "../../Components/components/button"

class Portal extends React.Component {
  componentDidMount() {
    document.title = "Choose a Path"
  }

  render() {
    return (
      <div className="portal fade-in">
        <div className="portal__section portal__section--light">
          <div className="portal__section-wrapper">
            <h1 className="portal__title">About</h1>
            <p className="portal__description">
              {" "}
              Get to know me as a person ·<br />
              Random facts, how i spend my free time or which hot liquid i prefer
              inside my cup.{" "}
            </p>
            <div className="portal__button-wrapper">
              <Button link="/about" text="Ocean Route ·" class="button--portal" />
            </div>
          </div>
        </div>
        <div className="portal__section portal__section--dark">
          <h1 className="portal__title">Background</h1>
          <p>
            Check my journey as a digital deshi ·<br />
            My background, how it all started, the tools I use or my future plans.
          </p>
          <div class="portal__button-wrapper">
            <Button
              link="/background"
              text="· Earth Route"
              class="button--portal button--portal-dark"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Portal
