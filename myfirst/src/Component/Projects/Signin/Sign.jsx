import React, { useState } from "react";

function Sign() {
  const [emailVar, setEmail] = useState("");
  const [passVar, setPass] = useState("");

  const userData = [
    {
      userName: "sawan kumar yadav",
      password: "969677"
    },
    {
      userName: "lokesh yadav",
      password: "635028"
    }
  ];

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  function handleFormData() {
    for (let i = 0; i <= userData.length; i++) {
      if (userData[i].userName === emailVar) {
        console.log("log in");
      } else {
        console.log("log in error");
      }
    }
  }

  return (
    <>
      <div className="max-w-lg rounded-md bg-lime-600 text-white mx-auto py-3 px-3 mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={emailVar}
              onChange={handleEmail}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={passVar}
              onChange={handlePass}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            onClick={handleFormData}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Sign;
