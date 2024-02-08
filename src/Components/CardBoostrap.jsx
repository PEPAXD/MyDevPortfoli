import "./Styles/CardBoostrap.scss";
import Card from "react-bootstrap/Card";

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

          <div className="linkContain">
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
