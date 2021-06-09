/* eslint-disable import/no-webpack-loader-syntax */
import { useEffect, useState } from "react";
const { findSolution } = require("workerize-loader!./findSolution.ts")();

const secretKey = "iwrupvqb";

const Day4 = () => {
  const [solution, setSolution] = useState("346386");
  const [solution2, setSolution2] = useState("9958218");
  useEffect(() => {
    /*     findSolution(secretKey, "00000").then((result) => {
      setSolution(result);
    });
    findSolution(secretKey, "000000").then((result) => {
      setSolution2(result);
    }); */
  }, []);

  return (
    <div>
      <h4>day4: The Ideal Stocking Stuffer</h4>
      <p>the lowest positive number starts with "00000":{solution}</p>
      <p>the lowest positive number starts with "000000":{solution2}</p>
    </div>
  );
};

export default Day4;
