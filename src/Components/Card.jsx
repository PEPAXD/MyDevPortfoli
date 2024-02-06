import React from "react";
import image1 from "../assets/image1.jpg";
import "./Styles/Card.scss";

function Card() {
  return (
    <div className="card">
        <img src={image1} alt="" />
      <div className="card-body">
        <h4 className="card-tittle">CardTittle</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eveniet
          molestias. Impedit id aperiam libero qui facilis harum, natus quaerat.
          Quaerat a, obcaecati nostrum culpa et architecto molestias. Quas,
          autem!
        </p>
      </div>
    </div>
  );
}

export default Card;
