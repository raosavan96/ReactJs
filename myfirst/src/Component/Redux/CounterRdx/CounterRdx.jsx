import React from "react";
import ReduxCon from "./ReduxCon";

function CounterRdx() {
  const data = [
    {
      id: 1,
      colorName: "red",
      count: 0
    },
    {
      id: 2,
      colorName: "Yellow",
      count: 0
    },
    {
      id: 3,
      colorName: "blue",
      count: 0
    },
    {
      id: 4,
      colorName: "green",
      count: 0
    }
  ];
  return (
    <>
      <div>
        {data.map((value, index) => (
          <ReduxCon data={value} />
        ))}
      </div>
    </>
  );
}

export default CounterRdx;
