import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialSlider1 from "../components/MaterialSlider1";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";

function UserDetails(props) {
  return (
    <Stack>
      <RectStack>
        <Rect>
          <Shruti>Shruti</Shruti>
          <Ellipse1StackRow>
            <Ellipse1Stack>
              <svg
                viewBox="0 0 110.08 43.91"
                style={{
                  top: 0,
                  left: 0,
                  width: 110,
                  height: 44,
                  position: "absolute"
                }}
              >
                <ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(178,234,174,1)"
                  cx={55}
                  cy={22}
                  rx={55}
                  ry={22}
                ></ellipse>
              </svg>
              <SaveSoil>save soil</SaveSoil>
            </Ellipse1Stack>
            <EllipseStack>
              <svg
                viewBox="0 0 100 43.91"
                style={{
                  top: 0,
                  left: 0,
                  width: 100,
                  height: 44,
                  position: "absolute"
                }}
              >
                <ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(178,234,174,1)"
                  cx={50}
                  cy={22}
                  rx={50}
                  ry={22}
                ></ellipse>
              </svg>
              <Planting>planting</Planting>
            </EllipseStack>
          </Ellipse1StackRow>
          <Rect3>
            <LoremIpsum>Goes to modern public. Loves swimming</LoremIpsum>
          </Rect3>
          <Activity1Row>
            <Activity1>Activity 1</Activity1>
            <MaterialSlider1Stack>
              <MaterialSlider1
                style={{
                  position: "absolute",
                  height: 30,
                  width: 150,
                  left: 0,
                  top: 0
                }}
              ></MaterialSlider1>
              <MaterialSlider1
                style={{
                  position: "absolute",
                  height: 30,
                  width: 150,
                  left: 0,
                  top: 0
                }}
              ></MaterialSlider1>
            </MaterialSlider1Stack>
          </Activity1Row>
          <Activity2Row>
            <Activity2>Activity 2</Activity2>
            <MaterialSlider1
              style={{
                height: 30,
                width: 150,
                marginLeft: 24
              }}
            ></MaterialSlider1>
          </Activity2Row>
          <Activity3Row>
            <Activity3>Activity 3</Activity3>
            <MaterialSlider1
              style={{
                height: 30,
                width: 150,
                marginLeft: 24
              }}
            ></MaterialSlider1>
          </Activity3Row>
        </Rect>
        <Image
          src={require("../assets/images/png-clipart-powerpuff-girls-buttercup-buttercup-cartoon-network-television-show-reboot-powerpuff-girls-television-face.png")}
        ></Image>
        <CupertinoSegmentWithTwoTabs
          style={{
            height: 56,
            width: 375,
            position: "absolute",
            left: 0,
            top: 366
          }}
        ></CupertinoSegmentWithTwoTabs>
      </RectStack>
      <Rect2></Rect2>
    </Stack>
  );
}

const Stack = styled.div`
  width: 377px;
  height: 812px;
  position: relative;
  display: flex;
`;

const Rect = styled.div`
  top: 142px;
  left: 2px;
  width: 375px;
  height: 543px;
  position: absolute;
  background-color: rgba(235,230,230,1);
  flex-direction: column;
  display: flex;
`;

const Shruti = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 30px;
  margin-top: 70px;
  margin-left: 147px;
`;

const SaveSoil = styled.span`
  font-family: Comic Sans MS;
  top: 10px;
  left: 16px;
  position: absolute;
  font-style: italic;
  font-weight: ;
  color: #121212;
  font-size: 20px;
`;

const Ellipse1Stack = styled.div`
  width: 110px;
  height: 44px;
  position: relative;
`;

const Planting = styled.span`
  font-family: Comic Sans MS;
  top: 9px;
  left: 14px;
  position: absolute;
  font-style: italic;
  font-weight: ;
  color: #121212;
  font-size: 20px;
`;

const EllipseStack = styled.div`
  width: 100px;
  height: 44px;
  margin-left: 49px;
  margin-top: 1px;
  position: relative;
`;

const Ellipse1StackRow = styled.div`
  height: 45px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 58px;
  margin-right: 58px;
`;

const Rect3 = styled.div`
  width: 368px;
  height: 52px;
  background-color: #E6E6E6;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  box-shadow: 3px 3px 0px  0.21px rgba(0,0,0,1) ;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 7px;
`;

const Activity1 = styled.span`
  font-family: Comic Sans MS;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 7px;
`;

const MaterialSlider1Stack = styled.div`
  width: 150px;
  height: 30px;
  margin-left: 24px;
  position: relative;
`;

const Activity1Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 100px;
  margin-left: 17px;
  margin-right: 71px;
`;

const Activity2 = styled.span`
  font-family: Comic Sans MS;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 7px;
`;

const Activity2Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 35px;
  margin-left: 17px;
  margin-right: 71px;
`;

const Activity3 = styled.span`
  font-family: Comic Sans MS;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 3px;
`;

const Activity3Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 17px;
  margin-right: 71px;
`;

const Image = styled.img`
  top: 0px;
  left: 97px;
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: contain;
`;

const RectStack = styled.div`
  top: 127px;
  left: 0px;
  width: 377px;
  height: 685px;
  position: absolute;
`;

const Rect2 = styled.div`
  top: 0px;
  left: 0px;
  width: 375px;
  height: 269px;
  position: absolute;
  background-color: rgba(183,233,133,1);
`;

export default UserDetails;
