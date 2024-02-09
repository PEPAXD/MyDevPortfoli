import "./Styles/CardBoostrap.scss";
import Card from "react-bootstrap/Card";

import "animate.css";
import {
  FaExternalLinkAlt,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";

function TextExample(props) {
  return (
    <div className="animateCard animate__animated animate__fadeInUp">
    <Card>
      <img src={props.image} alt="" />

      <Card.Body>
        <div className="textContain">
          <Card.Title className="tittle">Card Title</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            optio quae odit sapiente ea unde repudiandae at tempore fuga
            necessitatibus? Rem vitae accusantium nostrum commodi tenetur
            consequatur numquam enim sunt.
          </Card.Text>
        </div>

        <div className="techContain">
          <div className="skillsContain">
            <Card.Subtitle className="techTittle">Tech Skills :</Card.Subtitle>
            <div className="skills">
              [
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
              <FaReact />]
            </div>
          </div>

          <hr />

          <div className="linkContainer">
            <a
              href={props.urlDeploy}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaExternalLinkAlt
                style={{ marginRight: "10px", fontSize: "0.9em" }}
              />
              View Project
            </a>

            <a
              href={props.urlRepo}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCode style={{ marginRight: "10px" }} />
              Source Code
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TextExample;
