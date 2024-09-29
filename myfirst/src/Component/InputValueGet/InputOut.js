import React from "react";
import { useSelector } from "react-redux";

function InputOut() {
  const valueUsers = useSelector((state) => state.inputvalue.value);

  return (
    <>
      <div className="w-full">
        {valueUsers.map((value, index) => (
          <ul>
            <li>
              
              <span>{index+1}</span>
              {value.userData}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default InputOut;
