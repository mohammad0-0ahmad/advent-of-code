import { Fragment } from "react";
import { makeStyles } from "@material-ui/core";

export const defaultInput: { [key: string]: { [key: string]: number } } = {
  Alice: {
    Bob: 2,
    Carol: 26,
    David: -82,
    Eric: -75,
    Frank: 42,
    George: 38,
    Mallory: 39,
  },
  Bob: {
    Alice: 40,
    Carol: -61,
    David: -15,
    Eric: 63,
    Frank: 41,
    George: 30,
    Mallory: 87,
  },
  Carol: {
    Alice: -35,
    Bob: -99,
    David: -51,
    Eric: 95,
    Frank: 90,
    George: -16,
    Mallory: 94,
  },
  David: {
    Alice: 36,
    Bob: -18,
    Carol: -65,
    Eric: -18,
    Frank: -22,
    George: 2,
    Mallory: 42,
  },
  Eric: {
    Alice: -65,
    Bob: 24,
    Carol: 100,
    David: 51,
    Frank: 21,
    George: 55,
    Mallory: -44,
  },
  Frank: {
    Alice: -48,
    Bob: 91,
    Carol: 8,
    David: -66,
    Eric: 97,
    George: -9,
    Mallory: -92,
  },
  George: {
    Alice: -44,
    Bob: -25,
    Carol: 17,
    David: 92,
    Eric: -92,
    Frank: 18,
    Mallory: 97,
  },
  Mallory: {
    Alice: 92,
    Bob: -96,
    Carol: -51,
    David: -81,
    Eric: 31,
    Frank: -73,
    George: -89,
  },
};

const KnightsOfTheDinnerTable = () => {
  const classes = useStyles();
  const solution =
    getCombinationOfTheHighestPossibleTotalHappiness(defaultInput);
  console.log(solution);
  return (
    <div className={classes.KnightsOfTheDinnerTable}>
      {InputTable(defaultInput)}
    </div>
  );
};

export default KnightsOfTheDinnerTable;

const InputTable = (input: object) => {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <td>X</td>
          {Object.keys(input).map((column, i) => (
            <td key={i}>{column}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(input).map(([name, neighbors]: [string, object], i) => (
          <tr key={name}>
            <td>{name}</td>
            {Object.entries(neighbors).map(([_, happiness], j) => (
              <Fragment key={j}>
                {i === 0 && j === 0 && <td>X</td>}
                <td>{happiness}</td>
                {i === j + 1 && <td>X</td>}
              </Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const useStyles = makeStyles(() => ({
  KnightsOfTheDinnerTable: {
    flex: 1,
    justifyContent: "center",
  },
  table: {
    margin: "auto",
    borderCollapse: "collapse",
    "&tr,td": {
      border: "1px solid #000000",
      padding: 10,
      textAlign: "center",
    },
  },
}));

export const calcHappiness = (
  nameList: Array<string>,
  happinessObject: any
) => {
  let result = 0;
  for (let i = 0; i < nameList.length; i++) {
    const leftSideNeighborIndex = i === 0 ? nameList.length - 1 : i - 1;
    const rightSideNeighborIndex = i === nameList.length - 1 ? 0 : i + 1;
    result +=
      happinessObject[nameList[i]][nameList[leftSideNeighborIndex]] +
      happinessObject[nameList[i]][nameList[rightSideNeighborIndex]];
  }
  return result;
};

export const getCombinationOfTheHighestPossibleTotalHappiness = (
  happinessObject: object
): any => {
  //TODO: write an algorithm that solve the issue.
  return [
    "Alice",
    "Bob",
    "Frank",
    "Carol",
    "Eric",
    "David",
    "George",
    "Mallory",
  ];
};
