import React, { useCallback, useEffect, useState } from "react";

function PassGtry() {
  const [length, setLength] = useState(0);
  const [numAllowe, setNumAllowe] = useState(false);
  const [charAllowe, setSrtAllowe] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let srt = "ABCDEFGHIJKLMNOPQURSTVUWXYZabcdefghijklmnopqurstvuwxyz";

    if (numAllowe) srt += "0123456789";
    if (charAllowe) srt += "!@#$%^&*-=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * srt.length + 1);
      pass += srt.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowe, numAllowe, setPassword]);

  useEffect(() => {
    passwordGen();
  }, [length, charAllowe, numAllowe, passwordGen]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-4">
        <h1 className="text-white text-center text-3xl">Password Genrator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-3">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 "
            value={password}
            readOnly
            placeholder="Password"
          />
        </div>

        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numAllowe}
              id="numberInput"
              onChange={() => {
                setNumAllowe((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={charAllowe}
              id="numberInput"
              onChange={() => {
                setSrtAllowe((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Charator</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGtry;
