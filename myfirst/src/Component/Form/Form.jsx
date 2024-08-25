import React, { useState } from "react";
import FormCss from "./form.module.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [value, setValue] = useState();

  function firstNameFun(e) {
    setFirstName(e.target.value);
  }

  function lastNameFun(e) {
    setLastName(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    setValue(firstName);
  }

  return (
    <>
      <div className={FormCss.form}>
        <form onSubmit={handleForm}>
          <h1 style={{ textAlign: "center" }}>
            Hello {value == "" ? "Form" : value}
          </h1>
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            value={firstName}
            onChange={firstNameFun}
          />
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            value={lastName}
            onChange={lastNameFun}
          />

          <h5 className="mt-3" style={{ color: "red" }}>
            {value}
          </h5>
          <button className="form-control btn btn-danger" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
