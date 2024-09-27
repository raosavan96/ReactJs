import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../../Features/Counter/CounterSlice";

function Decrement() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="w-1/3 bg-[red] py-3 rounded-lg"
      >
        Decrement
      </button>
    </>
  );
}

export default Decrement;
