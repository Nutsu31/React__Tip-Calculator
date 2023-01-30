import styled from "styled-components";
import React from "react";
import { Calc } from "./Calc";
import Result from "./Result";

const Container = () => {
  return (
    <ContainerDiv>
      <Calc />
      <Result />
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
`;
