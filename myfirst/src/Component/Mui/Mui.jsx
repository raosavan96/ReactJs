import SearchAppBar from "./SearchAppBar";
import MediaCard from "./MediaCard";
import { useEffect, useState } from "react";
function Mui() {
  const [Datas, SetDatas] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/Products")
      .then((reu) => {
        return reu.json();
      })
      .then((data) => {
        console.log(data);
        let a = SetDatas(data.Products[0].title);
        console.log(a);
      });
  }, [Datas]);
  return (
    <>
      <SearchAppBar />

      {/* {Datas.map((value) => (
        <MediaCard allData={value} />
      ))} */}
      <MediaCard allData={Datas} />
    </>
  );
}

export default Mui;
