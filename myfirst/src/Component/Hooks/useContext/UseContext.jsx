import React, { createContext } from "react";
import Achild from "./Achild";

let userData = createContext();

function useContext() {
  let myName = "Sawan Kumar Yadav";
  return (
    <>
      <userData.Provider value={myName}>
        <div>useContext</div>
        <Achild />
      </userData.Provider>
    </>
  );
}

export default useContext;
export { userData };
