import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialHeader1 from "../components/MaterialHeader1";

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Image
            source={require("../assets/images/Screenshot_2022-04-06_at_12.40.28_PM.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.symphony}>Symphony</Text>
          <Text style={styles.loremIpsum}>Technology craves human touch</Text>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
          ></MaterialButtonPrimary>
        </View>
        <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    width: 416,
    height: 788,
    position: "absolute",
    backgroundColor: "rgba(184,233,134,1)"
  },
  image: {
    width: 218,
    height: 200,
    marginTop: 140,
    marginLeft: 91
  },
  symphony: {
    fontFamily: "roboto-700italic",
    color: "rgba(86,81,81,1)",
    fontSize: 30,
    marginTop: 19,
    marginLeft: 131
  },
  loremIpsum: {
    fontFamily: "roboto-italic",
    color: "#121212",
    marginTop: 18,
    marginLeft: 102
  },
  materialButtonPrimary: {
    height: 60,
    width: 176,
    marginTop: 51,
    marginLeft: 112
  },
  materialHeader1: {
    position: "absolute",
    left: 415,
    top: 225,
    width: 375,
    height: 56
  },
  rectStack: {
    width: 790,
    height: 788,
    marginTop: 30,
    marginLeft: -13
  }
});

export default LoginPage;
