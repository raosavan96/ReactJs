import { useState } from "react";
function UseStateHook() {
  // (1)

  //   const [value, setValue] = useState("Sawan");

  //   function handleValue() {
  //     setValue("Rao Sawan");
  //   }

  // (2)

  //   const [value, countValue] = useState(0);

  //   function Increment() {
  //     countValue(value + 1);
  //   }

  //   function Decrement() {
  //     if (value) {
  //       countValue(value - 1);
  //     }
  //   }

  let data = { userName: "Lokesh ", lastName: "Yadav" };

  const [objValue, setObj] = useState(data);

  function objChange() {
    setObj({ ...data, userName: "Sawan " });
  }

  return (
    <>
      <h1>Learn UseState Hook</h1>

      {/* <h2>UserName :- {value} </h2>

      <button onClick={handleValue}>Update</button> */}

      {/* Increment & Decrement */}

      {/* <h2>Counter Application</h2>

      <button onClick={Increment}>Increment</button>
      <h3>{value}</h3>
      <button onClick={Decrement}>Decrement</button> */}

      <h1>Object value change with UseState</h1>
      <h2>
        {objValue.userName}
        {objValue.lastName}
      </h2>
      <button onClick={objChange}>Object value change</button>
    </>
  );
}

export default UseStateHook;
