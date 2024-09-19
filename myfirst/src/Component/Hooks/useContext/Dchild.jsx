import React from "react";
import { userData } from "./UseContext";

function Dchild() {
  return (
    <>
      <div>D-child</div>
      <userData.Consumer>
        {(value) => {
          return <>{value}</>;
        }}
      </userData.Consumer>
    </>
  );
}

export default Dchild;
