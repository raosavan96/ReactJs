import React, { useRef } from "react";
import { styled } from "@mui/material/styles";

function UseRef() {
  const useRefDom = useRef("");
  const handleHed = useRef("");

  function handleHedding() {
    handleHed.current.style.color = "Yellow";
    handleHed.current.style.fontSize = "40px";
  }

  function handleInput() {
    useRefDom.current.focus();
    useRefDom.current.style.color = "#fff";
    useRefDom.current.style.backgroundColor = "red";
    useRefDom.current.style.border = "#fff 1px solid";
  }
  return (
    <>
      <h1 className="text-center mt-3" ref={handleHed}>
        UseRef Hook
      </h1>

      <div className="max-w-lg mx-auto mt-4 rounded-md bg-gray-600 py-3 px-3">
        <input
          className="w-full py-2 bg-gray-500 outline-none rounded-md"
          type="text"
          ref={useRefDom}
        />
        <button
          className="w-full py-2 mt-3 rounded-md  bg-yellow-400 text-black"
          onClick={handleInput}
        >
          Submit
        </button>

        <button
          className="w-full py-2 mt-3 rounded-md  bg-pink-400 text-black"
          onClick={handleHedding}
        >
          Hadding UseRef
        </button>
      </div>
    </>
  );
}

export default UseRef;
