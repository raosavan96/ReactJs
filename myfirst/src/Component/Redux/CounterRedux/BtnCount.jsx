import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increFun } from "../../../Features/CounterRedux/CounterReduxSlice";

function BtnCount({ data }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cntrrdx.value[data.id] || 0 );
  console.log(value);

  function countAct() {
    dispatch(increFun({ id: data.id, count: value }));
  }
 
  return (
    <>
      <div>
        <p>{value}</p>
        <button
          className="btn"
          style={{ backgroundColor: `${data.namclr}` }}
          onClick={countAct}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default BtnCount;
