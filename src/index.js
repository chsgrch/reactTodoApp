import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";

const todoData = [
  { id: 1, label: "Drinc coffee", important: false },
  { id: 2, label: "Build react app", important: true },
  { id: 3, label: "Have breakfast", important: true },
];

ReactDOM.render(<App todoData={todoData} />, document.getElementById("root"));
