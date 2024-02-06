import "./Styles/Card.scss";
import React from "react";
import PropTypes from 'prop-types';

import 'animate.css';


function Card(props) {
  return (
    <div className="proyectCard">
        <img src={props.image} alt="" />
      <div className="textCard">
        <h4>{props.tittle}</h4>
        <p>
            {
                props.text ? props.text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit deserunt laborum ducimus temporibus odit placeat dolores rerum, nihil, suscipit natus porro et quas perferendis perspiciatis unde nemo, ea ad! Explicabo."
            }
        </p>
        <a href={props.url} className="link">
          Go To This Website 
        </a>
      </div>
    </div>
  );
}


export default Card;
