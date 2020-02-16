import "./background.css";
import React, { useEffect } from "react";
import "../Images/lightbox.css";
import { Wordpress, Ihu, Fosdem } from "../../content/communities.jsx";
import anime from "animejs/lib/anime.es.js";

const Background = () => {
  useEffect(() => {
    document.title = "Earth Herself";
    tableAnimation();
  }, []);

  const tableAnimation = () =>
    anime({
      targets: ".background__community-row",
      borderColor: "#000",
      easing: "linear",
      duration: 1000,
      delay: 1000,
      complete: () =>
        anime({
          targets: ".background__community-item",
          opacity: 1,
          easing: "linear",
          duration: 2000
        })
    });

  var skills = [
    "HTML",
    "CSS / SASS",
    "JavaScript",
    "ReactJS",
    "Socket.io",
    "Java",
    "UI/UX",
    "Python",
    "Git"
  ];

  let communityTable = {
    attributes: ["Emblem", "Title", "Role"],
    data: [
      [<Ihu class="background__svg" />, "IEEE IHU SKG Student Branch", "Member"],
      [
        <Wordpress class="background__svg" />,
        "WordPress Greek Community",
        "Volunteer"
      ],
      [<Fosdem class="background__svg" />, "Fosdem", "Volunteer"]
    ]
  };

  return (
    <div fluid="true" className="background layout">
      <h1 className="background__title">Background</h1>
      <p className="layout__container-content background__content">
        {/* //todo: refactor */}I admire creations that try to show their
        flavour to the world, creations whose main goal is to have an impact by
        expressing their own philosophy, <b>their own story.</b> I see the world
        of Design as complex yet based on simple principles that guide you, but
        don't cut down your own determination to apply your personal touches.
        <br />
        My experience involves working as a WordPress freelancer and in-house
        Front / React Developer.
      </p>
      <table className="background__communities">
        <thead>
          <tr className="background__community-row">
            {communityTable.attributes.map((attribute, index) => (
              <th
                style={{ opacity: 0 }}
                className="background__community-item background__community-item--head"
                key={index}
              >
                {attribute}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {communityTable.data.map((element, index) => (
            <tr
              key={index}
              className="background__community-row background__community-row--content"
            >
              {element.map((dataItem, index) => (
                <td
                  style={{ opacity: 0 }}
                  className="background__community-item"
                  key={index}
                >
                  {dataItem}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Background;
