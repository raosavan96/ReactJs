import React, { useEffect, useState } from "react";
import Tbody from "./Tbody";
// import { Link } from "react-router-dom";

function Api() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data.users);
      });
  }, []);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Mail</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>

        {userData.map((value) => (
          <Tbody mainValue={value} />
        ))}
      </table>
    </>
  );
}

export default Api;
