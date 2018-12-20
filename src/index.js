import ReactDOM from "react-dom";
import React from "react";
import DifficultyParams from "./DifficultyParams";
import DifficultyChart from "./DifficultyChart";

const NaivecoinDifficulty = () => (
  <div>
    <DifficultyParams />
    <DifficultyChart />
  </div>
);

ReactDOM.render(<NaivecoinDifficulty />, document.getElementById("root"));
