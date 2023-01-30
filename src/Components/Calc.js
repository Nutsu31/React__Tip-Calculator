import React, { useState } from "react";
import calcCss from "../Components/calc.module.css";
import dollar from "../Assets/images/icon-dollar.svg";
import people from "../Assets/images/icon-person.svg";
import styled, { css } from "styled-components";
import { act } from "react-dom/test-utils";

export const Calc = () => {
  return (
    <div className={calcCss.calc}>
      <Bill />
      <Buttons />
      <NumOfPeople />
    </div>
  );
};

const Bill = () => {
  return (
    <div className={calcCss.div}>
      <p className={calcCss.p}>Bill</p>
      <div className={calcCss.inputBox}>
        <img src={dollar} alt="dollar" />
        <input
          placeholder="Enter charge amount"
          type="number"
          className={calcCss.input}
        />
      </div>
    </div>
  );
};

const Buttons = (props) => {
  const [active, setActive] = useState(null);
  const numbers = [
    5 + "%",
    10 + "%",
    15 + "%",
    25 + "%",
    50 + "%",
    <input type="number" placeholder="Custom" />,
  ];

  const eachButton = numbers.map((num) => {
    return (
      <ButtonsDiv
        value={num}
        key={Math.random() * Math.random() * Math.random()}
        onClick={() => {
          setActive(num);
        }}
        active={active === num}
      >
        {num}
      </ButtonsDiv>
    );
  });

  return <div className={calcCss.buttonsFlex}>{eachButton}</div>;
};

const ButtonsDiv = styled.div(
  (props) => css`
    color: ${props.active ? "#00474B" : "white"};
    font-size: 24px;
    font-weigth: 800;
    width: 116px;
    height: 48px;
    background: ${props.active ? "#26C2AE" : "#00474B"};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
    &:hover {
      color: #00474b;
      font-weight: 800;
      background-color: #9fe8df;
    }
    & input {
      color: #00474b;
      font-family: "Space Mono", monospace;
      font-weight: 800;
      font-size: 24px;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: none;
      background-color: #f3f9fa;
      outline: none;
      text-align: right;
    }
  `
);

//   const [active, setActive] = useState(null);

//   const eachButton = numbers.map((num) => {
//     return (
//       <ButtonRatings
//         value={num}
//         key={Math.random() * Math.random() * Math.random()}
//         onClick={() => {
//           setActive(num);
//         }}
//         active={active === num}
//       >
//         {num}
//       </ButtonRatings>
//     );
//   });
//   return <div className={calcCss.buttonsFlex}>{eachButton}</div>;
// };

// const ButtonRatings = styled.button(
//   (props) => css`
//     color: white;
//     font-size: 24px;
//     width: 116px;
//     height: 48px;
//     background: #00474b;
//     border: none;
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: 0.3s ease;
//     &:hover {
//       olor: #00474b;
//       background-color: #9fe8df;
//     }
//   `
// );

const NumOfPeople = () => {
  return (
    <div className={calcCss.div}>
      <p className={calcCss.p}>Number of People</p>
      <div className={calcCss.inputBox}>
        <img src={people} alt="Person" />
        <input
          type="number`"
          placeholder="Enter amount of People"
          min={1}
          className={calcCss.input}
        />
      </div>
    </div>
  );
};
