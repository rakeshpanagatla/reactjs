import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./app";

// //This is how its done in react 17
// // 1st parameter => JSX that you want to place in real DOM
// // 2nd parameter => where do you want to place the JSX
// ReactDOM.render(ele, document.getElementById("app"));

// new react 18 version
// Creating new instance of app/root
const app = ReactDOM.createRoot(document.getElementById("app"));
// rendering the newly created object
app.render(
  <App
    name="mano"
    age={25}
    array={[1, 2, 3]}
    active={true}
    address={{ name: "mano" }}
  />
);
