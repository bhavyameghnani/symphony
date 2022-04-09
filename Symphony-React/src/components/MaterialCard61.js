import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialCard61(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/Screenshot_2022-04-09_at_11.30.11_AM2.png")}
      ></CardItemImagePlace>
      <BodyContent>
        <PlantedATreeToday>Planted a tree today</PlantedATreeToday>
        <CategorySoil>Category : Soil</CategorySoil>
      </BodyContent>
      <ActionBody>
        <ActionButton1>
          <ButtonOverlay>
            <PostActivity>Post Activity</PostActivity>
          </ButtonOverlay>
        </ActionButton1>
        <ActionButton2>
          <ButtonOverlay>
            <ActionText2>ACTION 2</ActionText2>
          </ButtonOverlay>
        </ActionButton2>
        <ActionButton3>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="chevron-up"
              style={{
                fontSize: 24,
                color: "#000",
                opacity: 0.7
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </ActionButton3>
      </ActionBody>
      <Body>
        <BodyText>
          It&#39;s a mango tree. I saved a seed ! Mangoes coming !
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

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const CardItemImagePlace = styled.img`
  background-color: #ccc;
  min-height: 210px;
  flex: 1 1 0%;
  left: 0px;
  width: 357px;
  top: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const CategorySoil = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
`;

const ActionBody = styled.div`
  padding: 8px;
  flex-direction: row;
  position: relative;
  display: flex;
`;

const ActionButton1 = styled.div`
  padding: 8px;
  height: 36px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const PostActivity = styled.span`
  font-family: Arial;
  font-size: 14px;
  color: #000;
  opacity: 0.9;
`;

const ActionButton2 = styled.div`
  padding: 8px;
  height: 36px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const ActionText2 = styled.span`
  font-family: Arial;
  font-size: 14px;
  color: #000;
  opacity: 0.9;
`;

const ActionButton3 = styled.div`
  padding: 8px;
  height: 36px;
  position: absolute;
  right: 8px;
  bottom: 12px;
  flex-direction: column;
  display: flex;
  border: none;
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

export default MaterialCard61;
