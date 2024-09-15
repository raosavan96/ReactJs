import React, { useReducer } from "react";

function UseReducer() {
  const initaitalState = {
     count: 0,
    myName: "Sonu Yadav"
  };
  const [state, disPatch] = useReducer(reducer, initaitalState);

  function reducer(currentState, action) {
    switch (action) {
      case "Increment":
        return { ...currentState, count: currentState.count + 1 };
      case "Decrement":
        return { ...currentState, count: currentState.count - 1 };

      case "Update":
        return {
          ...currentState,
          myName: (currentState.myName = "Sawan Kumar Yadav")
        };

      default:
        return { ...currentState, count: currentState.count };
    }
  }
  return (
    <>
      <h1 className="text-center mt-3">UseReducer Hook</h1>

      <div className="max-w-lg bg-yellow-800 rounded-md mt-3 py-3 px-3 mx-auto">
        <div className="mt-3">
          <h1 className="text-center mb-3 text-xl">{state.count}</h1>

          <button
            onClick={() => {
              disPatch("Increment");
            }}
            className="w-full py-2 rounded-md bg-green-500"
          >
            Increment
          </button>
          <button
            onClick={() => {
              disPatch("Decrement");
            }}
            className="w-full py-2 rounded-md  mt-2 bg-red-500"
          >
            Decrement
          </button>

          <h1 className="text-center mt-3 mb-3 text-xl">{state.myName}</h1>

          <button
            onClick={() => {
              disPatch("Update");
            }}
            className="w-full py-2 rounded-md  mt-2 bg-orange-500 text-white"
          >
            Name Update
          </button>
        </div>
      </div>
    </>
  );
}

export default UseReducer;
