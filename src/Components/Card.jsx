import "./Styles/Card.scss";
import React from "react";
import PropTypes from 'prop-types';

import 'animate.css';


function Card(props) {
  return (
    <div className="card bg-dark animate__animated animate__fadeInUp">
        <img src={props.image} alt="" />
      <div className="card-body text-light">
        <h4 className="card-tittle">{props.tittle}</h4>
        <p className="card-text text-secondary">
            {
                props.text ? props.text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit deserunt laborum ducimus temporibus odit placeat dolores rerum, nihil, suscipit natus porro et quas perferendis perspiciatis unde nemo, ea ad! Explicabo."
            }
        </p>
        <a href={props.url} className="btn btn-outline-success">
          Go To This Website 
        </a>
      </div>
    </div>
  );
}


export default Card;
