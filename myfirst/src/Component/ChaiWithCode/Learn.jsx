import React, { useState } from "react";
import PassGGrty from "./Projects/PassGGrty";
// import PassGtry from "./Projects/PassGtry";
// import CardOne from "./CardOne";
// import PassGen from "./Projects/PassGen";

function Learn() {
  // const [colorr, setColor] = useState("red")
  return (
    <>
      {/* <div style={{backgroundColor: colorr}} className="w-full h-screen">
        <h1 className="text-white bg-black">TailWind CSS</h1>

        <div>
          <CardOne />
        </div>

        <div className="px-4 mx-auto py-4 rounded-lg bg-white gap-4 d-inline-block fixed bottom-11 left-1/2">
            <button onClick={()=> setColor("red")} className="px-3 me-2 py-2 text-white rounded-xl" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=> setColor("green")} className="px-3 py-2 me-2 text-white rounded-xl" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=> setColor("blue")} className="px-3 py-2 text-white rounded-xl" style={{backgroundColor:"blue"}}>Blue</button>
        </div>
      </div> */}
      {/* <PassGen /> */}
      {/* <PassGtry/> */}
      <PassGGrty/>
    </>
  );
}

export default Learn;
