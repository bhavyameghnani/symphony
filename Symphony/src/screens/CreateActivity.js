import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import MaterialHeader1 from "../components/MaterialHeader1";

function CreateActivity(props) {
  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        customMapStyle={[]}
        style={styles.mapView}
      ></MapView>
      <MaterialSearchBar style={styles.materialSearchBar}></MaterialSearchBar>
      <MaterialSearchBar1
        style={styles.materialSearchBar1}
      ></MaterialSearchBar1>
      <Text style={styles.createActvity}>Create Actvity</Text>
      <Text style={styles.chooseLocation}>Choose Location</Text>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(183,233,133,1)"
  },
  mapView: {
    height: 372,
    width: 232,
    marginTop: 374,
    marginLeft: 71
  },
  materialSearchBar: {
    height: 56,
    width: 375,
    marginTop: -568
  },
  materialSearchBar1: {
    height: 56,
    width: 375,
    marginTop: 49,
    marginLeft: -1
  },
  createActvity: {
    fontFamily: "roboto-italic",
    color: "#121212",
    fontSize: 20,
    marginTop: -193,
    marginLeft: 21
  },
  chooseLocation: {
    fontFamily: "roboto-italic",
    color: "#121212",
    fontSize: 20,
    marginTop: 78,
    marginLeft: 21
  },
  materialHeader1: {
    width: 375,
    height: 56,
    marginTop: -234,
    marginLeft: -1
  }
});

export default CreateActivity;
