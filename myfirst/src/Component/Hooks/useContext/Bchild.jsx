import React from "react";
import Cchild from "./Cchild";

function Bchild() {
  return (
    <>
      <div>B-child</div>
      <Cchild />
    </>
  );
}

export default Bchild;
