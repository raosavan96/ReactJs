import SearchAppBar from "./SearchAppBar";
import MediaCard from "./MediaCard";
import { useEffect, useState } from "react";
function Mui() {
  const [Datas, SetDatas] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/Carts")
      .then((reu) => {
        return reu.json();
      })
      .then((data) => {
        // console.log(data.carts);
        SetDatas(data.carts);
      });
  }, []);
  return (
    <>
      <SearchAppBar />

      {Datas.map((value, index) => (
        <MediaCard>{value}</MediaCard>
      ))}
      {/* <MediaCard /> */}
    </>
  );
}

export default Mui;
