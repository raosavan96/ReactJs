import React, { useState } from "react";

function BackColor() {
  const [color, setColor] = useState("");
  let div = {
    height: "100vh",
    backgroundColor: color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <>
      <div style={div}>
        <div className="flex gap-4">
          <button
            className="text-white py-2 px-3  bg-[red]"
            onClick={() => {
              setColor("red");
            }}
          >
            red
          </button>
          <button
            className="text-white py-2 px-3  bg-[green]"
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
          <button
            className="text-white py-2 px-3  bg-[blue]"
            onClick={() => {
              setColor("blue");
            }}
          >
            blue
          </button>
          <button
            className="text-white py-2 px-3  bg-[yellow]"
            onClick={() => {
              setColor("yellow");
            }}
          >
            yellow
          </button>
          <button
            className="text-white py-2 px-3  bg-[black]"
            onClick={() => {
              setColor("black");
            }}
          >
            black
          </button>
          <button
            className="text-white py-2 px-3  bg-[blue]"
            onClick={() => {
              setColor("pink");
            }}
          >
            pink
          </button>
          <button
            className="text-black py-2 px-3  bg-[white]"
            onClick={() => {
              setColor("white");
            }}
          >
            white
          </button>
        </div>
      </div>
    </>
  );
}

export default BackColor;
