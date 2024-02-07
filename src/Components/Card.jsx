import "./Styles/Card.scss";
import React from "react";
import PropTypes from "prop-types";

import "animate.css";
import {
  FaExternalLinkAlt,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";

function Card(props) {
  return (
    <div className="proyectCard">
      <img src={props.image} alt="" />

      <div className="overlay">
        <div className="textCard">
          <h4>{props.tittle}</h4>
          <p>
            {props.text
              ? props.text
              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit deserunt laborum ducimus temporibus odit placeat dolores rerum, nihil, suscipit natus porro et quas perferendis perspiciatis unde nemo, ea ad! Explicabo."}
          </p>
        </div>

        <div className="devToolsContainer">
          <div className="techContainer">
            <h5>Tech-Skills:</h5>
            <div className="skills">
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
              <FaReact />
            </div>
          </div>

          <div className="linkContainer">
            <a
              href={props.url}
              className="link"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaExternalLinkAlt
                style={{ marginRight: "10px", fontSize: "0.9em" }}
              />
              View Project
            </a>

            <a
              href={props.url}
              className="sourceCode"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaCode style={{ marginRight: "10px" }} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
