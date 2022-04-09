import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialSlider1 from "../components/MaterialSlider1";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";

function UserDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <Text style={styles.shruti}>Shruti</Text>
            <View style={styles.ellipse1StackRow}>
              <View style={styles.ellipse1Stack}>
                <Svg viewBox="0 0 110.08 43.91" style={styles.ellipse1}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(178,234,174,1)"
                    cx={55}
                    cy={22}
                    rx={55}
                    ry={22}
                  ></Ellipse>
                </Svg>
                <Text style={styles.saveSoil}>save soil</Text>
              </View>
              <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 100 43.91" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(178,234,174,1)"
                    cx={50}
                    cy={22}
                    rx={50}
                    ry={22}
                  ></Ellipse>
                </Svg>
                <Text style={styles.planting}>planting</Text>
              </View>
            </View>
            <View style={styles.rect3}>
              <Text style={styles.loremIpsum}>
                Goes to modern public. Loves swimming
              </Text>
            </View>
            <View style={styles.activity1Row}>
              <Text style={styles.activity1}>Activity 1</Text>
              <View style={styles.materialSlider1Stack}>
                <MaterialSlider1
                  style={styles.materialSlider1}
                ></MaterialSlider1>
                <MaterialSlider1
                  style={styles.materialSlider2}
                ></MaterialSlider1>
              </View>
            </View>
            <View style={styles.activity2Row}>
              <Text style={styles.activity2}>Activity 2</Text>
              <MaterialSlider1 style={styles.materialSlider3}></MaterialSlider1>
            </View>
            <View style={styles.activity3Row}>
              <Text style={styles.activity3}>Activity 3</Text>
              <MaterialSlider1 style={styles.materialSlider4}></MaterialSlider1>
            </View>
          </View>
          <Image
            source={require("../assets/images/png-clipart-powerpuff-girls-buttercup-buttercup-cartoon-network-television-show-reboot-powerpuff-girls-television-face.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <CupertinoSegmentWithTwoTabs
            style={styles.cupertinoSegmentWithTwoTabs}
          ></CupertinoSegmentWithTwoTabs>
        </View>
        <View style={styles.rect2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 142,
    left: 2,
    width: 375,
    height: 543,
    position: "absolute",
    backgroundColor: "rgba(235,230,230,1)"
  },
  shruti: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 70,
    marginLeft: 147
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 110,
    height: 44,
    position: "absolute"
  },
  saveSoil: {
    top: 10,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-italic",
    color: "#121212",
    fontSize: 20
  },
  ellipse1Stack: {
    width: 110,
    height: 44
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 100,
    height: 44,
    position: "absolute"
  },
  planting: {
    top: 9,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-italic",
    color: "#121212",
    fontSize: 20
  },
  ellipseStack: {
    width: 100,
    height: 44,
    marginLeft: 49,
    marginTop: 1
  },
  ellipse1StackRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 58,
    marginRight: 58
  },
  rect3: {
    width: 368,
    height: 52,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.21,
    shadowRadius: 0
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 7
  },
  activity1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 7
  },
  materialSlider1: {
    position: "absolute",
    height: 30,
    width: 150,
    left: 0,
    top: 0
  },
  materialSlider2: {
    position: "absolute",
    height: 30,
    width: 150,
    left: 0,
    top: 0
  },
  materialSlider1Stack: {
    width: 150,
    height: 30,
    marginLeft: 24
  },
  activity1Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 100,
    marginLeft: 17,
    marginRight: 71
  },
  activity2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 7
  },
  materialSlider3: {
    height: 30,
    width: 150,
    marginLeft: 24
  },
  activity2Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 17,
    marginRight: 71
  },
  activity3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 3
  },
  materialSlider4: {
    height: 30,
    width: 150,
    marginLeft: 24
  },
  activity3Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 17,
    marginRight: 71
  },
  image: {
    top: 0,
    left: 97,
    width: 200,
    height: 200,
    position: "absolute"
  },
  cupertinoSegmentWithTwoTabs: {
    height: 56,
    width: 375,
    position: "absolute",
    left: 0,
    top: 366
  },
  rectStack: {
    top: 127,
    left: 0,
    width: 377,
    height: 685,
    position: "absolute"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 375,
    height: 269,
    position: "absolute",
    backgroundColor: "rgba(183,233,133,1)"
  },
  rectStackStack: {
    width: 377,
    height: 812
  }
});

export default UserDetails;
