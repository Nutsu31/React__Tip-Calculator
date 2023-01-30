import React from "react";
import calcCss from "../Components/calc.module.css";
import dollar from "../Assets/images/icon-dollar.svg";
import people from "../Assets/images/icon-person.svg";

export const Calc = () => {
  return (
    <div>
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
        <img src={dollar} />
        <input
          placeholder="Enter charge amount"
          type="number"
          className={calcCss.input}
        />
      </div>
    </div>
  );
};

const Buttons = () => {
  const numbers = [
    5 + "%",
    10 + "%",
    15 + "%",
    25 + "%",
    50 + "%",
    <input placeholder="Custom" type="number" />,
  ];
  return (
    <div>
      <p className={calcCss.p}>Select Tip %</p>
      <div className={calcCss.buttonsFlex}>
        {numbers.map((num) => {
          return <div className={calcCss.buttons}>{num}</div>;
        })}
      </div>
    </div>
  );
};

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
