import React, { createContext } from "react";
import Achild from "./Achild";

const contextApi = createContext();
const myApi = createContext();
const myPro = createContext();

function UseContextApi() {
  let sendCapi = "Context Api Data";
  let myName = "Sawan Kumar Yadav";
  let myClass = "I am a Web Developer";
  return (
    <>
      <contextApi.Provider value={sendCapi}>
        <myApi.Provider value={myName}>
          <myPro.Provider value={myClass}>
            <div>UseContextApi</div>
            <Achild />
          </myPro.Provider>
        </myApi.Provider>
      </contextApi.Provider>
    </>
  );
}

export default UseContextApi;
export { contextApi };
export { myApi };
export { myPro };
