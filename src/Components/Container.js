import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Calc } from "./Calc";
import Result from "./Result";

const Container = () => {
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [percent, setPercent] = useState(0);
  const [custom, setCustom] = useState(0);

  useEffect(() => {
    if (custom) {
      setTotal((bill + tip) / people);
      setTip((bill / 100) * custom);
    } else {
      setTotal((bill + tip) / people);
      setTip((bill / 100) * percent);
    }
  }, [bill, people, tip, total, custom]);

  return (
    <ContainerDiv>
      <Calc
        tip={tip}
        setTip={setTip}
        total={total}
        setTotal={setTotal}
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        percent={percent}
        setPercent={setPercent}
        custom={custom}
        setCustom={setCustom}
      />
      <Result
        tip={tip}
        total={total}
        setTip={setTip}
        setTotal={setTotal}
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
      />
    </ContainerDiv>
  );
};

export default Container;

const ContainerDiv = styled.div`
  box-sizing: border-box;
  width: 920px;
  height: 480px;
  padding: 32px;
  background-color: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 928px) {
    flex-direction: column;
    width: fit-content;
    height: fit-content;
  }
`;
