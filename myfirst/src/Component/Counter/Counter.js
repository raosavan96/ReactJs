import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import { useSelector } from "react-redux";

function Counter() {
  const countValue = useSelector((state) => state.counter.value);
  return (
    <>
      <h1 className="text-center mt-3">Counter</h1>

      <div className="max-w-lg bg-cyan-500 rounded-lg p-3 mx-auto mt-3 flex justify-between">
        <Increment />
        <h2 className="w-1/4 m-0 p-0 text-center bg-[white] py-3 rounded-lg text-black">
          {countValue}
        </h2>
        <Decrement />
      </div>
    </>
  );
}

export default Counter;
