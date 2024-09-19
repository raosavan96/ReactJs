import React from "react";
import Dchild from "./Dchild";

function Cchild() {
  return (
    <>
      <div>C-child</div>
      <Dchild />
    </>
  );
}

export default Cchild;
