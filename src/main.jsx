import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="containApp">
      <App />
    </div>
  </React.StrictMode>
);
