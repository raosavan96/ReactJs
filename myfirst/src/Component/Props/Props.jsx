import React from "react";
import PropsTry from "./PropsTry";
import Card from "./Card";
import CardImage from "../Css/Media/Images/user.jpg";
import Cardgirl from "../Css/Media/Images/usergirl.jpg";

function Props() {
  let data = [
    {
      firstName: "Sawan",
      lastName: " Yadav",
      prof: "Web Developer",
      img: CardImage,
    },
    {
      firstName: "Lokesh",
      lastName: " Yadav",
      prof: "Motion Graphic Designer",
      img: Cardgirl,
    },
    {
      firstName: "Deshraj",
      lastName: " Yadav",
      prof: "Motion Graphic Designer",
      img: CardImage,
    },
    {
      firstName: "Rahul",
      lastName: " Jangid",
      prof: "Motion Graphic Designer",
      img: Cardgirl,
    },
  ];

  return (
    <>
      {/* <PropsTry userData={data} /> */}

      {data.map((value) => (
        <Card userData={value} />
      ))}

      {data.map((value) => (
        <ul>
          <li>
            {value.firstName} {value.lastName}
          </li>
        </ul>
      ))}
    </>
  );
}

export default Props;
