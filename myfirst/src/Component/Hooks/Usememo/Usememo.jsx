import React, { useMemo, useState } from "react";

function Usememo() {
  const [add, setAdd] = useState(0);
  const [rem, setRem] = useState(0);

  function divide() {
    console.log("divied action");
    return add / 2;
  }

  const valueMemo = useMemo(divide, [add]);
  return (
    <>
      <div className="text-center">Usememo</div>

      <div className="bg-teal-400 flex-col py-3 px-3 rounded-md max-w-lg mx-auto flex items-center justify-center mt-4">
        <div className="flex">
          <h1 className="p-2 me-3 text-black">{add}</h1>
          <button
            onClick={() => {
              setAdd(add + 1);
            }}
            className="p-2 bg-white text-black  px-3"
          >
            Add
          </button>
        </div>

        <div className="flex">
          <h1 className="p-2 me-3 text-black">{rem}</h1>
          <button
            onClick={() => {
              setRem(rem - 1);
            }}
            className="p-2 bg-purple-600 text-black  px-3"
          >
            Add
          </button>
        </div>

        <div>
          <h1 className="text-orange-400">{valueMemo}</h1>
        </div>
      </div>
    </>
  );
}

export default Usememo;
