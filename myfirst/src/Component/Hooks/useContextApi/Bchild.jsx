import React, { useContext } from "react";
import Cchild from "./Cchild";
import { myApi } from "./UseContextApi";

function Bchild() {
  const myName = useContext(myApi);
  return (
    <>
      <div>B-child</div>
      <h1>{myName}</h1>
      <Cchild />
    </>
  );
}

export default Bchild;
