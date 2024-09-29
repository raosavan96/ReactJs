import React, { useState } from "react";

import InputOut from "./InputOut";
import { useDispatch } from "react-redux";
import { handleInput } from "../../Features/InputGet/InputSlice";

function InputGet() {
  const dispatch = useDispatch();
  const [inValue, setInValue] = useState("");

  function handleForm(e) {
    e.preventDefault();
    dispatch(
      handleInput({
        userData: inValue
      })
    );
    setInValue("");
  }

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="max-w-2xl w-full p-3 rounded-lg bg-transparent mx-auto overflow-hidden">
          <form onSubmit={handleForm}>
            <input
              onChange={(e) => {
                setInValue(e.target.value);
              }}
              value={inValue}
              type="text"
              className="outline-none text-black px-3 bg-white w-full py-2 rounded-lg"
            />
            <button
              className="w-full py-2 mt-3 rounded-lg bg-green-600"
              type="submit"
            >
              Submit
            </button>
          </form>
          <InputOut />
        </div>
      </div>
    </>
  );
}

export default InputGet;
