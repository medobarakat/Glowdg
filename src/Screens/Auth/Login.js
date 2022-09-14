import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { PrimaryColor, BlackColor, WhiteColor } from "../../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../../constants/Sized";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@rneui/themed";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
const Login = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.firstset}>
        <View style={styles.firstitle}>
          <Text style={styles.firstitletxt}>GLOWDG</Text>
        </View>
        <Text style={styles.firstsettxt}>Login</Text>
      </View>
      <View style={styles.inputcontainer}>
        <Input
          style={styles.input}
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
        />
        <Pressable style={styles.forget}>
          <Text style={styles.forgettxt}>Forget Password ?</Text>
        </Pressable>
        <Button color={PrimaryColor} containerStyle={styles.btn}>
          Login
        </Button>
        <View style={styles.lastsec}>
          <Text style={styles.lasttxt}>Don't have an account?</Text>
          <Pressable>
            <Text style={styles.lastpress}> Register</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstset: {
    height: height / 2.7,
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
  inputcontainer: {
    marginTop: height / 20,
    width: width / 1.5,
    marginLeft: width / 6,
  },
  input: {
    width: width / 5,
  },
  forget: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgettxt: {
    fontSize: verysmallSize,
    color: "#777",
  },
  btn: {
    marginTop: height / 13,
    borderRadius: height / 5,
    elevation: 3,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#52006A",
  },
  lastsec: {
    display: "flex",
    flexDirection: "row",
    marginTop: height / 10,
    marginLeft: width / 8,
  },
  lasttxt: {
    fontSize: verysmallSize,
  },
  lastpress: {
    color: "red",
    fontSize: verysmallSize,
  },
});
