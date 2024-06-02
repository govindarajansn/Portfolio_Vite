import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PreloadMedia from "../src/Components/PreloadMedia";
import { media } from "../src/Constants/constants";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
// import "../public/Fonts/Mo÷rganite/"
import "../public/Fonts/Morganite/morganiteFont.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreloadMedia images={Object.values(media)}>
        <App />
      </PreloadMedia>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
