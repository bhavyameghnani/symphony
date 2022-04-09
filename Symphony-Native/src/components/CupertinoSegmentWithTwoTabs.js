import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoSegmentWithTwoTabs(props) {
  return (
    <Container {...props}>
      <TextWrapper>
        <SegmentTextWrapperLeft>
          <ButtonOverlay>
            <TitleLeft>Puppies</TitleLeft>
          </ButtonOverlay>
        </SegmentTextWrapperLeft>
        <SegmentTextWrapperRight>
          <ButtonOverlay>
            <TitleRight>Cubs</TitleRight>
          </ButtonOverlay>
        </SegmentTextWrapperRight>
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
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  display: flex;
`;

const SegmentTextWrapperLeft = styled.div`
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

const TitleLeft = styled.span`
  font-family: Roboto;
  font-size: 13px;
  color: #FFFFFF;
`;

const SegmentTextWrapperRight = styled.div`
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

const TitleRight = styled.span`
  font-family: Roboto;
  font-size: 13px;
  color: #007AFF;
`;

export default CupertinoSegmentWithTwoTabs;
