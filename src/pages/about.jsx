import React from "react"
import { Component } from "react"
import FloatingElements from "../components/components/floatingElements"
import { Layout } from "../components/layout"
import { Helmet } from "react-helmet"
import { analytics } from "../components/helmet/analytics"

const SEO = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>The Ocean</title>
    <meta name="description" content="Facts about me as a non-techy person." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://kalovelo.com/about" />
    <script>{analytics}</script>
    <meta property="og:image" content="https://kalovelo.com/SEO/meta_img.jpg" />
  </Helmet>
)
class About extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <div className="layout  fade-in about">
          <FloatingElements num={2} />

          <h1 className="fade-in about__pageTitle">FOOD TO KEEP PASSION FLOWING</h1>
          <div className="about__container-wrapper">
            <div className="about__container about__container--left">
              <h3 className="about__container-title">Athletics</h3>
              <p className="layout__container-content">
                Spending an hour or two sweating is enough to lift a day's weight.
                Extra points having a session in a more natural environment than a
                gym - seaside or inside a forest - for working out both the body and
                spirit. <i>What a combo!</i>
                Talking about physical and spiritual improvement, I have zeal for the
                martial artist's lifestyle, where courage, discipline & respect are
                the root elements of a fighter's spirit.
                <br />
                <br />
                <i>
                  The story begins with a chubby young kid and a hard-copy of Rocky.
                </i>
              </p>
            </div>
            <div className="slide-in-right about__container about__container--right">
              <h3 className="about__container-title">Literature</h3>
              <p className="layout__container-content ">
                {" "}
                Books here and there, full of notes. My cup of tea includes
                self-improvement, philosophy and classic literature books. By the
                way, the closer I am to nature, the more I appreciate a good poem.
                <br />
                <br />I love trading books, so if you're up for some new suggestions
                and long conversations, don't forget to say so!
              </p>
            </div>
          </div>

          <div className="about__container about__container--big">
            <h1 className="about__container-title">Entertainment</h1>
            <p className="layout__container-content">
              My music preference ranges from the heaviest metal riffs to the
              slowest, calming hip-hop beats. It always depends on the mood, the
              situtation - and of course - the company.
            </p>
            <span className="about__quote">and if we're talking about...</span>
            <p className="about__container-content-simple">
              Videogames feel just like reading a good book but here you're in the
              protagonist's shoes. I used to game on since i can remember, and in
              exchange i got some extra passion for challenges and exploration. Grew
              up with Crash Bandicoot, fell in love with Dark Souls and lately I am
              on a hunt for unique & innovating indie games.
            </p>
            <span className="about__quote about__quote--last">
              'Don't you dare go hollow.'
            </span>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
