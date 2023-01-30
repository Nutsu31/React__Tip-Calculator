import React from "react";
import resultCSS from "../Components/result.module.css";

const Result = () => {
  return (
    <div className={resultCSS.div}>
      <div className={resultCSS.flexBox}>
        <div>
          <h3 className={resultCSS.h3}>Tip Amount</h3>
          <p className={resultCSS.p}>/ person</p>
        </div>
        <h1 className={resultCSS.h1}>$4.27</h1>
      </div>
      <div className={resultCSS.flexBox}>
        <div>
          <h3 className={resultCSS.h3}>Total</h3>
          <p className={resultCSS.p}>/ person</p>
        </div>
        <h1 className={resultCSS.h1}>$32.79</h1>
      </div>
      <Reset />
    </div>
  );
};

export default Result;

const Reset = () => {
  return <button className={resultCSS.reset}>Reset</button>;
};
