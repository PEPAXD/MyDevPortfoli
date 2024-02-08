import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="containApp">
      <App />
    </div>
  </React.StrictMode>
);
