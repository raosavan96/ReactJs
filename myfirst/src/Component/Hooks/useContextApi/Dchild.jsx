import React, { useContext } from "react";
import { contextApi } from "./UseContextApi";

function Dchild() {
  const sendCapi = useContext(contextApi);

  return (
    <>
      <div>D-child</div>

      <h1>{sendCapi}</h1>
    </>
  );
}

export default Dchild;
