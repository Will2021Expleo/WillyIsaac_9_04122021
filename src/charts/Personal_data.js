import React, { Component } from "react";
import calories from "../assets/calories-icon.svg";
import protein from "../assets/protein-icon.svg";
import glucid from "../assets/glucid-icon.svg";
import lipid from "../assets/lipid-icon.svg";

let data = [
  {
    id: 0,
    image: "../assets/calories-icon.svg",
    qty: "1,930kCal",
    title: "Calories",
  },
  {
    id: 1,
    image: "../assets/protein-icon.svg",
    qty: "135g",
    title: "Proteines",
  },
  {
    id: 2,
    image: "../assets/glucid-icon.svg",
    qty: "290g",
    title: "Glucides",
  },
  {
    id: 3,
    image: "../assets/lipid-icon.svg",
    qty: "50g",
    title: "Lipides",
  },
];

class PersonalData extends Component {
  render() {
    return (
      <div className="homepage__statistics-box__right">
        <div className="container">
          <img src={calories} alt="" />

          <div className="container__details">
            <p className="container__qty">1,930kCal</p>
            <p className="container__item__tile">Calories</p>
          </div>
        </div>
        <div className="container">
          <img src={protein} alt="" />
          <div className="container__details">
            <p className="container__qty">135g</p>
            <p className="container__item__tile">Proteines</p>
          </div>
        </div>
        <div className="container">
          <img src={glucid} alt="" />
          <div className="container__details">
            <p className="container__qty">290g</p>
            <p className="container__item__tile">Glucides</p>
          </div>
        </div>
        <div className="container">
          <img src={lipid} alt="" />
          <div className="container__details">
            <p className="container__qty">50g</p>
            <p className="container__item__tile">Lipides</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalData;

{
  /*
   */
}

{
  /* <div className="container">
          <img src={protein} alt="" />
          <div className="container__details">
            <p className="container__qty">135g</p>
            <p className="container__item__tile">Proteines</p>
          </div>
        </div>
        <div className="container">
          <img src={glucid} alt="" />
          <div className="container__details">
            <p className="container__qty">290g</p>
            <p className="container__item__tile">Glucides</p>
          </div>
        </div>
        <div className="container">
          <img src={lipid} alt="" />
          <div className="container__details">
            <p className="container__qty">50g</p>
            <p className="container__item__tile">Lipides</p>
          </div>
        </div> */
}

// let data = [
//   {
//     image: "../assets/calories-icon.svg",
//     qty: "1,930kCal",
//     title: "Calories",
//   },
//   {
//     image: "../assets/protein-icon.svg",
//     qty: "135g",
//     title: "Proteines",
//   },
//   {
//     image: "../assets/glucid-icon.svg",
//     qty: "290g",
//     title: "Glucides",
//   },
//   {
//     image: "../assets/lipid-icon.svg",
//     qty: "50g",
//     title: "Lipides",
//   },
// ];

// class PersonalData extends Component {
//   render() {
//     return (
//       <div className="homepage__statistics-box__right">
//         <div className="container">
//           {data.map((oneElement) => (
//             <img src={oneElement.image} alt="" />
//           ))}
//           {data.map((details) => (
//             <div className="container__details">
//               <p className="container__qty">{details.qty}</p>
//               <p className="container__item__tile">{details.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default PersonalData;
