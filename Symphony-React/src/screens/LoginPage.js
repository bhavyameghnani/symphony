import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialHeader1 from "../components/MaterialHeader1";

function LoginPage(props) {
  return (
    <Stack>
      <Rect>
        <Image
          src={require("../assets/images/Screenshot_2022-04-06_at_12.40.28_PM.png")}
        ></Image>
        <Symphony>Symphony</Symphony>
        <LoremIpsum>Technology craves human touch</LoremIpsum>
        <MaterialButtonPrimary
          style={{
            height: 60,
            width: 176,
            shadowRadius: 0,
            backgroundColor: "rgba(15,15, 15,0.38)",
            borderRadius: 30,
            marginTop: 43,
            marginLeft: 112,
            boxShadow: "3px 3px 0px  0.28px rgba(0,0,0,1) "
          }}
        ></MaterialButtonPrimary>
      </Rect>
      <MaterialHeader1
        style={{
          position: "absolute",
          left: 415,
          top: 225,
          width: 375,
          height: 56
        }}
      ></MaterialHeader1>
    </Stack>
  );
}

const Stack = styled.div`
  width: 790px;
  height: 788px;
  margin-top: 30px;
  margin-left: -13px;
  position: relative;
  display: flex;
`;

const Rect = styled.div`
  top: 0px;
  left: 0px;
  width: 416px;
  height: 788px;
  position: absolute;
  background-color: rgba(77,156,129,1);
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  width: 218px;
  height: 100%;
  border-radius: 44px;
  margin-top: 140px;
  margin-left: 91px;
  object-fit: cover;
`;

const Symphony = styled.span`
  font-family: Pacifico;
  font-style: italic;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 30px;
  margin-top: 19px;
  margin-left: 136px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-weight: ;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 18px;
  margin-left: 67px;
`;

export default LoginPage;
