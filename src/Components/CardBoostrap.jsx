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
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { BsBootstrapFill } from "react-icons/bs";



function TextExample(props) {
  return (
    <div className="animateCard animate__animated animate__fadeInUp">
      <Card>
        <img src={props.image} alt="siamesMp3Player" />

        <Card.Body>
          <div className="textContain">
            <Card.Title className="tittle">{props.tittle}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Card.Text>{props.challengeText}</Card.Text>
          </div>

          

          <div className="techContain">
            <div className="skillsContain">
              <Card.Subtitle className="techTittle">Tech Skills</Card.Subtitle>
              <div className="skills">
                <FaHtml5 color="#e34f26" title="HTML5" />
                <FaCss3 color="#1572b6" title="CSS3" />
                <FaJs color="#f7df1e" title="JavaScript" />
                <FaReact color="#61dbfb" title="React" />
                <FaNodeJs color="#3c873a" title="Node" />
                <SiExpress color="#fff" title="Express" />
                <BsBootstrapFill color="#563d7c" title="Bootstrap" />     
                <SiMongodb color="#13aa52" title="MongoDB" />  
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
