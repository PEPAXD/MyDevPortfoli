import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.scss";
import React from "react";

import Header from "./Header";
import CardBoostrap from "./CardBoostrap";
import data from "../Data/dataProjects";

function App() {
  return (
    <>
      <Header />
      <div className="ContainApp">
        <div className="containerCards">
          {data.map((data) => (
            <div className="cards" key={data.id}>
              <CardBoostrap
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
    </>
  );
}

export default App;
