import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.scss";
import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import CardBoostrap from "./CardBoostrap";
import data from "../Data/dataProjects";

function App() {
  const [filtersArray, setFiltersArray] = useState([]);

  const handleFiltersChange = (newFilters) => {
    setFiltersArray(newFilters);
  };

  return (
    <>
      <Header onFiltersChange={handleFiltersChange} />

      <div className="ContainApp">
        <div className="containerCards">
          {data
            .filter(
              (item) =>
                filtersArray.length === 0 ||
                filtersArray.some((filter) => item.techStack.includes(filter))
            )
            .map((data) => (
              <div className="cards" key={data.id}>
                <CardBoostrap
                  tittle={data.tittle}
                  image={data.image}
                  text={data.text}
                  challengeText={data.challengeText}
                  urlDeploy={data.urlDeploy}
                  urlRepo={data.urlRepo}
                  techStack={data.techStack}
                />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
