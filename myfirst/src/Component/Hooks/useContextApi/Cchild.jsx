import React, { useContext } from "react";
import Dchild from "./Dchild";
import { myPro } from "./UseContextApi";

function Cchild() {
  const myClass = useContext(myPro);
  return (
    <>
      <div>C-child</div>
      <h1>{myClass}</h1>
      <Dchild />
    </>
  );
}

export default Cchild;
