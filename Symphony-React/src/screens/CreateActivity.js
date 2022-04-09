import React, { Component } from "react";
import styled, { css } from "styled-components";
import GoogleMapReact from "google-map-react";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import MaterialHeader1 from "../components/MaterialHeader1";

function CreateActivity(props) {
  return (
    <Container>
      <MapView>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          defaultZoom={4}
          provider="MapView.PROVIDER_GOOGLE"
          defaultCenter={{
            latitude: 37.78825,
            lat: 20.5937,
            lng: 78.9629
          }}
          customMapStyle="Standard"
        />
      </MapView>
      <MaterialSearchBar
        style={{
          height: 56,
          width: 375,
          marginTop: -568
        }}
      ></MaterialSearchBar>
      <MaterialSearchBar1
        style={{
          height: 56,
          width: 375,
          marginTop: 49,
          marginLeft: -1
        }}
      ></MaterialSearchBar1>
      <CreateActvity>Create Actvity</CreateActvity>
      <ChooseLocation>Choose Location</ChooseLocation>
      <MaterialHeader1
        style={{
          width: 375,
          height: 56,
          marginTop: -234,
          marginLeft: -1
        }}
      ></MaterialHeader1>
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

const MapView = styled.div`
  height: 372px;
  width: 232px;
  margin-top: 374px;
  margin-left: 71px;
`;

const CreateActvity = styled.span`
  font-family: Comic Sans MS;
  font-style: italic;
  font-weight: ;
  color: #121212;
  font-size: 20px;
  margin-top: -193px;
  margin-left: 21px;
`;

const ChooseLocation = styled.span`
  font-family: Comic Sans MS;
  font-style: italic;
  font-weight: ;
  color: #121212;
  font-size: 20px;
  margin-top: 78px;
  margin-left: 21px;
`;

export default CreateActivity;
