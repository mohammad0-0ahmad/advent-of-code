/* eslint-disable import/no-webpack-loader-syntax */
import { useEffect, useState } from "react";
const { findSolution } = require("workerize-loader!./findSolution")();

const secretKey = "iwrupvqb";

const Day4 = () => {
  const [solution, setSolution] = useState("calculating");
  useEffect(() => {
    findSolution(secretKey).then((result) => {
      setSolution(result);
    });
  }, []);

  return (
    <div>
      <h4>day4: The Ideal Stocking Stuffer</h4>
      <p>the lowest positive number:{solution}</p>
    </div>
  );
};

export default Day4;
