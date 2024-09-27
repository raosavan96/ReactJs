import React from "react";
import { useSelector } from "react-redux";

function InputOut() {
  const inputData = useSelector((state) => state.inputfun.value);
  return (
    <>
      <div className="w-full">
        {inputData.map((value) => (
          <ul>
            <li>{value.userData}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default InputOut;
