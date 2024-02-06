import "./Styles/Cards.scss";

import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    tittle: "tittle-1",
    image: image1,
    url: "https://www.google.com",

  },
  {
    id: 2,
    tittle: "tittle-2",
    image: image2,
    url: "https://www.youtube.com",

  },
  {
    id: 3,
    tittle: "tittle-3",
    image: image3,
    url: "https://www.instagram.com",

  },
  {
    id: 4,
    tittle: "tittle-4",
    image: image1,
    url: "https://www.instagram.com",

  },
  {
    id: 5,
    tittle: "tittle-5",
    image: image2,
    url: "https://www.instagram.com",

  },
  {
    id: 6,
    tittle: "tittle-6",
    image: image3,
    url: "https://www.instagram.com",

  },
  
];

function Cards() {
  return (
    <div className="cardContainer">

        {cards.map((card) => (
          <div className="cards" key={card.id}>
            <Card
              tittle={card.tittle}
              image={card.image}
              text={card.text}
              url={card.url}
            />
          </div>
        ))}
      </div>

  );
}

export default Cards;
