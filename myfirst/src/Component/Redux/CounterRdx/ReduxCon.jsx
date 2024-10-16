import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementFun } from "../../../Features/CounterReduxx/CounterReduxxSlice";

function ReduxCon({ data }) {
  const value = useSelector((state) => state.countrdx.value[data.id] || 0);
  console.log(value)
  const dispatch = useDispatch();

  function handleBtn() {
    dispatch(incrementFun({ id: data.id, count: value }));
  }

  return (
    <>
      <div>
        <h1>{value}</h1>
        <button
          onClick={handleBtn}
          className="btn "
          style={{ backgroundColor: `${data.colorName}` }}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default ReduxCon;
