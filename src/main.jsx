import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App.jsx";
import Header from "./Components/Header.jsx";


import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="containApp">
      <Header />
      <App />
    </div>
  </React.StrictMode>
);
