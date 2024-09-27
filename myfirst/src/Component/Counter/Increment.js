import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../Features/Counter/CounterSlice";

function Increment() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="w-1/3 bg-[green] py-3 rounded-lg"
      >
        Increment
      </button>
    </>
  );
}

export default Increment;
