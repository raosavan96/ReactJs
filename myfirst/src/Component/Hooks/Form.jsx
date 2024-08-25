import React from "react";

function Form() {
  return (
    <>
      <h1>Form</h1>

      <div>
        <form className="">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
