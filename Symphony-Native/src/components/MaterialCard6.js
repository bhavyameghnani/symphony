import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard6(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <PlantedATreeToday>Planted a tree today</PlantedATreeToday>
        <Category>Category :</Category>
      </BodyContent>
      <Body>
        <BodyText>
          BuilderX is a screen design tool which codes React Native for you
          which design without boundaries, the code is generated simultaneously.
          Save your designed components as symbol and then simply add it to your
          design next time. Live preview works on real device. Shout out to the
          Expo team to make it happen.
        </BodyText>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 2px;
  border-color: #CCC;
  flex-wrap: nowrap;
  background-color: #FFF;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const PlantedATreeToday = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
`;

const Category = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
`;

const Body = styled.div`
  padding: 16px;
  padding-top: 8px;
  flex-direction: column;
  display: flex;
`;

const BodyText = styled.span`
  font-family: Arial;
  line-height: 20px;
  font-size: 14px;
  color: #424242;
`;

export default MaterialCard6;
