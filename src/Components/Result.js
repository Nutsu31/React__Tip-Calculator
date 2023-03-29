import React, { useEffect } from "react";
import resultCSS from "../Components/result.module.css";

const Result = (props) => {
  return (
    <div className={resultCSS.div}>
      <div className={resultCSS.flexBox}>
        <div>
          <h3 className={resultCSS.h3}>Tip Amount</h3>
          <p className={resultCSS.p}>/ person</p>
        </div>
        <h1 className={resultCSS.h1}>${props.tip}</h1>
      </div>
      <div className={resultCSS.flexBox}>
        <div>
          <h3 className={resultCSS.h3}>Total</h3>
          <p className={resultCSS.p}>/ person</p>
        </div>
        <h1 className={resultCSS.h1}>${props.total}</h1>
      </div>
      <Reset
        bill={props.bill}
        setBill={props.setBill}
        people={props.people}
        setPeople={props.setPeople}
        tip={props.tip}
        total={props.total}
        setTip={props.setTip}
        setTotal={props.setTotal}
      />
    </div>
  );
};

export default Result;

const Reset = (props) => {
  return (
    <button
      className={resultCSS.reset}
      onClick={(e) => {
        console.log(e.target);
        props.setTip(0);
        props.setTotal(0);
        props.setBill();
        props.setPeople(0);
      }}
    >
      Reset
    </button>
  );
};
