import React from "react";

// props se data niklna

// -> props read only hote h
// -> inki key value ko change ni kiya ja skta h

// (1)

// function PropsTry(props) {
//   const color = {
//     color: "red",
//   };
//   return (
//     <>
//       <h1 style={color}>
//         {props.userData[0].firstName}
//         {props.userData[0].lastName}
//       </h1>
//     </>
//   );
// }

// export default PropsTry;

// (2)

// function PropsTry({userData}) {
//   return (
//     <>
//       <h1>{userData[0].firstName} {userData[0].lastName}</h1>
//     </>
//   );
// }

// export default PropsTry;

// (3)

// function PropsTry(props) {
//   const { firstName } = props.userData[0];
//   const { lastName } = props.userData[0];
//   return (
//     <>
//       <h1>{firstName}{lastName}</h1>
//     </>
//   );
// }

// export default PropsTry;
