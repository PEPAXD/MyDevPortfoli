import "./Styles/CardBoostrap.scss";
import Card from "react-bootstrap/Card";

import "animate.css";

import {
  FaExternalLinkAlt,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

function TextExample(props) {
  const techIcons = {
    HTML5: <FaHtml5 color="#e34f26" title="HTML5" />,
    CSS3: <FaCss3Alt color="#1572b6" title="CSS3" />,
    JavaScript: <FaJs color="#f7df1e" title="JavaScript" />,
    React: <FaReact color="#61dbfb" title="React" />,
    Node: <FaNodeJs color="#3c873a" title="Node" />,
    Express: <SiExpress color="#fff" title="Express" />,
    Bootstrap: <BsBootstrapFill color="#563d7c" title="Bootstrap" />,
    MongoDB: <SiMongodb color="#13aa52" title="MongoDB" />,
    Firebase: <SiFirebase color="#E5AB00" title="Firebase" />,
    Python: <FaPython color="#FFD03D" title="Python" />,
    Java: <FaJava color="#007396" title="Java" />,
  };

  return (
    <div
      className={`animateCard animate__animated animate__fadeInUp ${props.key}`}
    >
      <Card>
        <img src={props.image} alt="refImg" />

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
                {props.techStack &&
                  props.techStack.map((tech, index) =>
                    React.cloneElement(techIcons[tech], { key: index })
                  )}
              </div>
            </div>

            <hr />

            <div className="linkContainer">
              {props.urlDeploy && (
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
                  Web Project
                </a>
              )}

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
                GitHub Code
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TextExample;
