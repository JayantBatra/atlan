import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
// Loading the index.css file within a React application is a common practice to apply global styles or styles that need to be accessible throughout the entire application.


ReactDom.render(<App />, document.querySelector("#root"));
