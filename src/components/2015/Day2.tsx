import input1 from "../inputs/2015/day2/input1";

const Day2 = () => {
  const [totalArea, totalAreaWithBow] = findSolution();
  return (
    <div>
      <h4>day2:</h4>
      <p>part1: How many total feet of ribbon should they order? {totalArea}</p>
      <p>
        part2: How many total feet of ribbon should they order?{" "}
        {totalAreaWithBow}
      </p>
    </div>
  );
};

export default Day2;

const findSolution = () => {
  const dimensions = input1.split(/x|\n/gm);
  const boxes: Array<Array<number>> = [];
  let totalArea = 0;
  let totalAreaWithBow = 0;
  for (let i = 0; i < dimensions.length; i += 3) {
    boxes.push([
      parseInt(dimensions[i]),
      parseInt(dimensions[i + 1]),
      parseInt(dimensions[i + 2]),
    ]);
  }
  boxes.forEach((boxDem) => {
    boxDem.sort((a, b) => a - b);
    const [l, w, h] = boxDem;
    const box = [l * w, w * h, h * l];
    totalArea += 3 * box[0] + 2 * box[1] + 2 * box[2];
    totalAreaWithBow += 2 * l + 2 * w + l * w * h;
  });
  return [totalArea, totalAreaWithBow];
};
