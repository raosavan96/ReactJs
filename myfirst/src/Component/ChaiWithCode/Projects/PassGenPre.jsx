import React, { useCallback, useEffect, useRef, useState } from "react";

function PassGenPre() {
  //   const [value, setValue] = useState("");
  const [length, setLength] = useState(0);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  const handleInputContent = useRef(null);

  let passwordGen = useCallback(() => {
    let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (allowNum) allChar += "0123456789";
    if (allowChar) allChar += "`~!@#$%^&*()-+[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * allChar.length + 1);
      pass += allChar.charAt(char);
    }

    setPassword(pass);
  }, [length, allowChar, allowNum, setPassword]);

  const handleCopy = useCallback(() => {
    handleInputContent.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGen();
  }, [length, allowChar, allowNum, passwordGen]);

  return (
    <>
      <div className="max-w-lg mx-auto p-3 rounded-md bg-slate-600 mt-3">
        <div className="d-flex">
          <input
            readOnly
            value={password}
            ref={handleInputContent}
            type="text"
            className="w-full py-2 bg-slate-900 rounded-md outline-none text-white px-3"
          />
          <button
            onClick={handleCopy}
            className="outline-none bg-yellow-500 text-black px-3 ms-2 rounded-md py-2 w-2/8"
          >
            Copy
          </button>
        </div>
        <div className="flex align-items-center mt-4">
          <div className="flex">
            <input
              className="me-2"
              type="range"
              value={length}
              min={5}
              max={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              defaultValue={allowNum}
              onChange={() => {
                setAllowNum((prev) => !prev);
              }}
              className="mx-2"
            />
            <label>Number</label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              defaultValue={allowChar}
              onChange={() => {
                setAllowChar((prev) => !prev);
              }}
              className="mx-2"
            />
            <label>Charctor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGenPre;
