import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../constants/Sized";

const Whoarewe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintxt}>Who We Are</Text>
    </View>
  );
};

export default Whoarewe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  maintxt: {
    fontSize: TitleSize,
    color: BlackColor,
  },
});
