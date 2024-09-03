import React from "react";
import PropsTry from "./PropsTry";
import Card from "./Card";
import CardI from "../Css/Media/Images/user.jpg";
import CardII from "../Css/Media/Images/user2.jpg";
import CardIII from "../Css/Media/Images/user3.jpg";
import CardIV from "../Css/Media/Images/user4.jpg";
import CardV from "../Css/Media/Images/user5.jpg";

function Props() {
  let data = [
    {
      firstName: "Sawan Kumar",
      lastName: " Yadav",
      prof: "Web Developer",
      img: CardI,
    },
    {
      firstName: "Lokesh",
      lastName: " Yadav",
      prof: "Motion Graphic Designer",
      img: CardII,
    },
    {
      firstName: "Deshraj",
      lastName: " Yadav",
      prof: "Motion Graphic Designer",
      img: CardIII,
    },
    {
      firstName: "Rahul",
      lastName: " Jangid",
      prof: "Motion Graphic Designer",
      img: CardIV,
    },
    {
      firstName: "Kamlesh",
      lastName: " Yadav",
      prof: "Student",
      img: CardV,
    },
  ];

  return (
    <>
      {/* <PropsTry userData={data} /> */}

      <div style={{ display: "flex" }}>
        {data.map((value) => (
          <Card userData={value} />
        ))}
      </div>

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
