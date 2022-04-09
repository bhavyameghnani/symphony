import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCard61 from "../components/MaterialCard61";
import MaterialHeader1 from "../components/MaterialHeader1";

function PostActivity(props) {
  return (
    <View style={styles.container}>
      <MaterialCard61 style={styles.materialCard61}></MaterialCard61>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
      <View style={styles.rect}>
        <Text style={styles.advertisement}>Advertisement</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(183,233,133,1)"
  },
  materialCard61: {
    width: 359,
    height: 467,
    marginTop: 122,
    marginLeft: 8
  },
  materialHeader1: {
    width: 375,
    height: 56,
    marginTop: -543,
    marginLeft: -1
  },
  rect: {
    width: 359,
    height: 139,
    backgroundColor: "#E6E6E6",
    marginTop: 505,
    marginLeft: 8
  },
  advertisement: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 59,
    marginLeft: 101
  }
});

export default PostActivity;
