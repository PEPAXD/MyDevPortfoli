import "./Styles/Cards.scss";

import React from "react";
import Card from "./Card";

import data from '../Data/dataProjects';

function Cards() {
  return (
    <div className="componentContainer">
      {" "}
      <div className="cardContainer">
        {data.map((data) => (
          <div className="cards" key={data.id}>
            <Card
              tittle={data.tittle}
              image={data.image}
              text={data.text}
              urlDeploy={data.urlDeploy}
              urlRepo={data.urlRepo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
