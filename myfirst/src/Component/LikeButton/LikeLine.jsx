import React from "react";
import { useSelector } from "react-redux";

function LikeLine() {
  const like = useSelector((state) => state.likebtn.value);
  console.log(like);
  return (
    <>
      <h1>{like}</h1>
    </>
  );
}

export default LikeLine;
