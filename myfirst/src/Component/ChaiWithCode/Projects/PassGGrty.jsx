import React, { useCallback, useEffect, useRef, useState } from "react";

function PassGGrty() {
  const [lenght, setLength] = useState(0);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  let passwordRef = useRef(null);

  const passGenFun = useCallback(() => {
    let pass = "";
    let srt = "ABCDEFGHIJKLMNOPQURSTVUWXYZabcdefghijklmnopqurstvuwxyz";

    if (charAllow) srt += "!@#$%^&*-=[]{}~`";
    if (numAllow) srt += "0123456789";

    for (let i = 1; i <= lenght; i++) {
      let chara = Math.floor(Math.random() * srt.length + 1);
      pass += srt.charAt(chara);
    }

    setPassword(pass);
  }, [lenght, numAllow, charAllow, setPassword]);

  const copyFun = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenFun();
  }, [lenght, numAllow, charAllow, passGenFun]);

  return (
    <>
      <div className="w-full max-w-md bg-gray-700 shadow-md my-8 rounded-md mx-auto px-3 py-3 text-orange-500">
        <h1 className="text-white text-center text-3xl">Password Genrator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-3">
          <input
            type="text"
            className="w-full py-1 outline-none px-3"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyFun}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {lenght}</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultValue={numAllow}
              id="allowednum"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="allowednum">Number</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultValue={charAllow}
              id="allowedchar"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="allowedchar">Charator</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGGrty;
