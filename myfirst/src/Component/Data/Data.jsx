import React, { useEffect, useState } from "react";
import Card from "./Card";

function Data() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [value]);

  //   console.log(data);

  return (
    <>
      <div className="d-flex">
        <button
          className="btn btn-primary"
          onClick={() => {
            setValue(value - 1);
          }}
        >
           {`<`}
        </button>
        <Card datas={data} />
        <button
          className="btn btn-primary"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          {`>`}
        </button>
      </div>
    </>
  );
}

export default Data;
