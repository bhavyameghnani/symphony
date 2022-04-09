import React, { Component } from "react";
import styled, { css } from "styled-components";

function Untitled(props) {
  return (
    <Image
      src={require("../assets/images/background2.jpeg")}
      resizeMode="contain"
    ></Image>
  );
}

const Image = styled.img`
  width: 375px;
  height: 992px;
  margin-top: -180px;
`;

export default Untitled;
