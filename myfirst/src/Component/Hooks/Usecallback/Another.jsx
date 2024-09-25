import React, { memo } from "react";

function Another(props) {
  console.log("Another Compo..");

  return (
    <>
      <div>Another Components...</div>
      {console.log(props.userName)}
      {console.log(props.mainUser)}
      <h1>{props.userName}</h1>
    </>
  );
}

export default memo(Another);

// memo only value ko rerendor hone se rokta h function to re rendor hota h
