import input from "./input";

const Day3 = () => {
  return (
    <div>
      <h4>day3: Perfectly Spherical Houses in a Vacuum</h4>
      <p>
        only Santa: How many houses receive at least one present?{" "}
        {getAmountVisitedHouses(1)}
      </p>
      <p>
        Santa & Santa-robot: How many houses receive at least one present?{" "}
        {getAmountVisitedHouses(2)}
      </p>
    </div>
  );
};

export default Day3;

const getAmountVisitedHouses = (amountPersons: number) => {
  const visitedHouses: any = { "0,0": true };
  const persons = new Array(amountPersons).fill({ x: 0, y: 0 });
  for (
    let i = 0, firstTime = true;
    i < input.length;
    i =
      i + amountPersons <= input.length
        ? i + amountPersons
        : firstTime
        ? (() => {
            firstTime = false;
            return input.length - 1;
          })()
        : input.length
  ) {
    persons.forEach((_, index) => {
      if (input?.[i + index]) {
        persons[index] = askElfForNewDestination(
          persons[index],
          input[i + index]
        );
        visitedHouses[persons[index].x + "," + persons[index].y] = true;
      }
    });
  }
  return Object.keys(visitedHouses).length;
};

const askElfForNewDestination = (
  { x, y }: { x: number; y: number },
  sign: any
): { x: number; y: number } => {
  let newX = x,
    newY = y;
  switch (sign) {
    case "^":
      newY++;
      break;
    case "v":
      newY--;
      break;
    case ">":
      newX++;
      break;
    case "<":
      newX--;
      break;
    default:
      console.error("unExpected sign :", sign);
  }
  return { x: newX, y: newY };
};
