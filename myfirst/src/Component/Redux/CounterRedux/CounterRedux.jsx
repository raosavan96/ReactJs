import React from "react";
import BtnCount from "./BtnCount";

function CounterRedux() {
  const data = [
    {
      id: 1,
      namclr: "red",
      count: 0
    },
    {
      id: 2,
      namclr: "yellow",
      count: 0
    },
    {
      id: 3,
      namclr: "blue",
      count: 0
    },
    {
      id: 4,
      namclr: "green",
      count: 0
    }
  ];
  return (
    <>
      <h1>Counter Redux</h1>
      <div>
        {data.map((value) => (
          <BtnCount data={value} />
        ))}
      </div>
    </>
  );
}

export default CounterRedux;
