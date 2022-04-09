import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoSegmentWithFourTabs2(props) {
  return (
    <Container {...props}>
      <TextWrapper>
        <SegmentTextWrapper1>
          <ButtonOverlay>
            <Text1>Day</Text1>
          </ButtonOverlay>
        </SegmentTextWrapper1>
        <SegmentTextWrapper2>
          <ButtonOverlay>
            <Text2>Week</Text2>
          </ButtonOverlay>
        </SegmentTextWrapper2>
        <SegmentTextWrapper3>
          <ButtonOverlay>
            <Text3>Month</Text3>
          </ButtonOverlay>
        </SegmentTextWrapper3>
        <SegmentTextWrapper4>
          <ButtonOverlay>
            <Text4>Year</Text4>
          </ButtonOverlay>
        </SegmentTextWrapper4>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFF;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const TextWrapper = styled.div`
  height: 29px;
  flex: 1 1 0%;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  display: flex;
`;

const SegmentTextWrapper1 = styled.div`
  flex: 1 1 0%;
  align-items: center;
  background-color: #007AFF;
  padding: 6px;
  border-width: 1px;
  border-color: #007AFF;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const Text1 = styled.span`
  font-family: Roboto;
  font-size: 13px;
  color: #FFFFFF;
`;

const SegmentTextWrapper2 = styled.div`
  flex: 1 1 0%;
  align-items: center;
  background-color: #FFFFFF;
  padding: 6px;
  border-width: 1px;
  border-color: #007AFF;
  border-left-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const Text2 = styled.span`
  font-family: Roboto;
  font-size: 13px;
  color: #007AFF;
`;

const SegmentTextWrapper3 = styled.div`
  flex: 1 1 0%;
  align-items: center;
  background-color: #FFFFFF;
  padding: 6px;
  border-width: 1px;
  border-color: #007AFF;
  border-right-width: 0px;
  border-left-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const Text3 = styled.span`
  font-family: Roboto;
  font-size: 13px;
  color: #007AFF;
`;

const SegmentTextWrapper4 = styled.div`
  flex: 1 1 0%;
  align-items: center;
  background-color: #FFFFFF;
  padding: 6px;
  border-width: 1px;
  border-color: #007AFF;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const Text4 = styled.span`
  font-family: Roboto;
  font-size: 13px;
  color: #007AFF;
`;

export default CupertinoSegmentWithFourTabs2;
