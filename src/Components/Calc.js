import React, { useEffect, useState } from "react";
import calcCss from "../Components/calc.module.css";
import dollar from "../Assets/images/icon-dollar.svg";
import people from "../Assets/images/icon-person.svg";
import styled, { css } from "styled-components";

export const Calc = (props) => {
  return (
    <div className={calcCss.calc}>
      <Bill bill={props.bill} setBill={props.setBill} />
      <Buttons
        total={props.total}
        setTip={props.setTip}
        setTotal={props.setTotal}
        setPercent={props.setPercent}
        percent={props.percent}
        bill={props.bill}
        setCustom={props.setCustom}
      />
      <NumOfPeople people={props.people} setPeople={props.setPeople} />
    </div>
  );
};

const Bill = (props) => {
  return (
    <div className={calcCss.div}>
      <p className={calcCss.p}>Bill</p>
      <div className={calcCss.inputBox}>
        <img src={dollar} alt="dollar" />
        <input
          placeholder="Enter charge amount"
          type="number"
          className={calcCss.input}
          onChange={(event) => {
            props.setBill(event.target.valueAsNumber);
          }}
        />
      </div>
    </div>
  );
};

const Buttons = (props) => {
  const [active, setActive] = useState(null);
  const numbers = [5, 10, 15, 25, 50];

  useEffect(() => {
    props.setTip((props.total / 100) * props.percent);
  });
  const eachButton = numbers.map((num) => {
    return (
      <ButtonsDiv
        value={num}
        key={Math.random() * Math.random() * Math.random()}
        onClick={() => {
          setActive(num);
          props.setPercent(num);
          console.log(num);
        }}
        active={active === num}
      >
        {num}%
      </ButtonsDiv>
    );
  });

  return (
    <div>
      <p className={calcCss.p}>Select Tip %</p>
      <div className={calcCss.buttonsFlex}>
        {eachButton}
        <input
          type="number"
          className={calcCss.custom}
          placeholder="Custom"
          onChange={(e) => {
            props.setCustom(e.target.valueAsNumber);
          }}
        />
      </div>
    </div>
  );
};

const NumOfPeople = (props) => {
  return (
    <div className={calcCss.div}>
      <p className={calcCss.p}>Number of People</p>
      <div className={calcCss.inputBox}>
        <img src={people} alt="Person" />
        <input
          type="number"
          placeholder="Enter amount of People"
          min={1}
          onChange={(event) => {
            props.setPeople(event.target.valueAsNumber);
          }}
          className={calcCss.input}
        />
      </div>
    </div>
  );
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
    display: inline-flex;
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
