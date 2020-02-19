import React from "react";
import { Container } from "react-bootstrap";
import { Component } from "react";
import "./notFound404.css";

class NotFound404 extends Component {
  componentDidMount() {
    this.generate_random_string();
    document.title = "Mistakes were made.";
  }

  constructor() {
    super();
    this.state = { randomString1: "", randomString2: "" };
  }

  generate_random_string = () => {
    let random_string1 = "";
    let random_string2 = "";
    let string_length = 600;
    let string_length2 = 5000;
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < string_length; i++) {
      random_string1 +=
        characters.charAt(Math.floor(Math.random() * characters.length)) + " ";
    }
    for (let i = 0; i < string_length2; i++) {
      random_string2 +=
        characters.charAt(Math.floor(Math.random() * characters.length)) + " ";
    }

    this.setState(prevState => ({
      randomString1: random_string1,
      randomString2: random_string2
    }));
  };

  render() {
    return (
      <div id="notFoundBody" fluid="true">
        <p>
          {this.state.randomString1}{" "}
          <a href="/" id="notFoundT">
            {this.props.location.pathname} wasn't found.
            <br />
            Friend, you should go back.
          </a>{" "}
          {this.state.randomString2}
        </p>
      </div>
    );
  }
}

export default NotFound404;
