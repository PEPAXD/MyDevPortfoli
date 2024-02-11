import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.scss";
import React from "react";

import NavBar from "./NavBar";
import CardBoostrap from "./CardBoostrap";
import data from "../Data/dataProjects";

function App() {
  return (
    <>
      <NavBar />
      
      <div className="ContainApp">
        <div className="containerCards">
          {data.map((data) => (
            <div className="cards" key={data.id}>
              <CardBoostrap
                tittle={data.tittle}
                image={data.image}
                text={data.text}
                challengeText={data.challengeText}
                urlDeploy={data.urlDeploy}
                urlRepo={data.urlRepo}
              />
            </div>
          ))}
        </div>
        
      </div>

    </>
  );
}

export default App;
