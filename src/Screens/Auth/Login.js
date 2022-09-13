import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { PrimaryColor, BlackColor, WhiteColor } from "../../constants/Colors";
import {
  height,
  width,
  smallSize,
  secSmallSize,
  TitleSize,
} from "../../constants/Sized";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstset}>
        <View style={styles.firstitle}>
          <Text style={styles.firstitletxt}>GLOWDG</Text>
        </View>
        <Text style={styles.firstsettxt}>Login</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstset: {
    height: height / 2,
    backgroundColor: PrimaryColor,
    borderBottomLeftRadius: height / 7,
  },
  firstitle: {
    display: "flex",
    marginTop: height / 7,
  },
  firstitletxt: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
    fontSize: TitleSize,
    color: WhiteColor,
  },
  firstsettxt: {
    position: "absolute",
    bottom: height / 15,
    right: height / 20,
    fontFamily: "Roboto_500Medium",
    fontSize: secSmallSize,
    color: WhiteColor,
  },
});
