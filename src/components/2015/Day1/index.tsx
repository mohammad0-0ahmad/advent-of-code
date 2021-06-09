import input1 from "./input";

const Day1 = () => {
  const [sum, basementFirstChar] = findSolution();
  return (
    <div>
      <h4>day1: Not Quite Lisp</h4>
      <p>input1 : {sum}</p>
      <p>First time in basement char index: {basementFirstChar + 1}</p>
    </div>
  );
};

export default Day1;

const findSolution = () => {
  let sum = 0;
  let basementFirstCharIndex = -1;
  input1.split("").forEach((letter, index) => {
    sum += letter === "(" ? 1 : letter === ")" ? -1 : 0;
    if (sum === -1 && basementFirstCharIndex === -1) {
      basementFirstCharIndex = index;
    }
  });
  return [sum, basementFirstCharIndex];
};
