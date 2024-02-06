import "./Styles/Cards.scss";

import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
    {
        id: 1,
        tittle: "testCard1",
        image: image1,
        url: "https://www.google.com",
        text: "Test Card 1 Text",
    },
    {
        id: 2,
        tittle: "testCard2",
        image: image2,
        url: "https://www.youtube.com",
        text: "Test Card 2 Text",

    },
    {
        id: 3,
        tittle: "testCard3",
        image: image3,
        url: "https://www.instagram.com",
        text: "Test Card 3 Text",
    },
]

function Cards() {
  return (
    <div className="container d-flex justify-content-cente align-items-center h-100">
      <div className="row">

    {
        cards.map((card) => (
            <div className="col-md-4" key={card.id}>
                <Card tittle={card.tittle} image={card.image} text={card.text} url={card.url} />
            </div>
        ))
    }

      </div>
    </div>
  );
}

export default Cards;
