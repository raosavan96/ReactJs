import React, { useCallback, useState } from "react";
import Another from "./Another";

function UseCallBack() {
  const [add, setAdd] = useState(0);

  let myName = "Sawan Kumar Yadav";

  function myFun() {
    return "Rao";
  }

  const memoFun = useCallback(myFun, []);

  return (
    <>
      <div className="text-center">UseCallBack</div>
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
        <Another userName={myName} mainUser={memoFun} />
      </div>
    </>
  );
}

export default UseCallBack;
