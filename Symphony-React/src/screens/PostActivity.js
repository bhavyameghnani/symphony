import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCard61 from "../components/MaterialCard61";
import MaterialHeader1 from "../components/MaterialHeader1";

function PostActivity(props) {
  return (
    <Container>
      <MaterialCard61
        style={{
          width: 359,
          height: 467,
          marginTop: 122,
          marginLeft: 8
        }}
      ></MaterialCard61>
      <MaterialHeader1
        style={{
          width: 375,
          height: 56,
          marginTop: -523
        }}
      ></MaterialHeader1>
      <Rect>
        <Advertisement>Advertisement</Advertisement>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(183,233,133,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rect = styled.div`
  width: 359px;
  height: 139px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: 485px;
  margin-left: 8px;
`;

const Advertisement = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 59px;
  margin-left: 101px;
`;

export default PostActivity;
