import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialCard6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.plantedATreeToday}>Planted a tree today</Text>
        <Text style={styles.category}>Category :</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          BuilderX is a screen design tool which codes React Native for you
          which design without boundaries, the code is generated simultaneously.
          Save your designed components as symbol and then simply add it to your
          design next time. Live preview works on real device. Shout out to the
          Expo team to make it happen.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  plantedATreeToday: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  category: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  body: {
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242"
  }
});

export default MaterialCard6;
