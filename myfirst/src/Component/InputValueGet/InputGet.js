import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inputFun } from "../../Features/InputGet/InputSlice";
import InputOut from "./InputOut";

function InputGet() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  function handleForm(e) {
    e.preventDefault();
    dispatch(
      inputFun({
        userData: inputValue
      })
    );
  }

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="max-w-2xl w-full p-3 rounded-lg bg-transparent mx-auto overflow-hidden">
          <form onClick={handleForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
