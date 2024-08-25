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

  const datas = { userName: "Lokesh", lastName: "Yadav" };

  const [objjValue, setObjj] = useState(datas);

  function objChange() {
    setObjj({ ...datas, userName: "Rao" });
  }

  return (
    <>
      <h1>Object value change with UseState</h1>
      <h2>
        {objjValue.userName}
        {objjValue.lastName}
      </h2>
      <button onClick={objChange}>Object value change</button>
    </>
  );
}

export default UseStateHook;
