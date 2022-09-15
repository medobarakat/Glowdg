import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React, { useEffect } from "react";
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
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const Signup = ({ navigation }) => {
  const progress = useSharedValue(0);
  const reanimatedstyle = useAnimatedStyle(() => {
    return {
      borderBottomRightRadius: progress.value,
      borderBottomLeftRadius: progress.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(height / 10, { duration: 3000 });
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {/* <Animated.View style={[styles.firstset, reanimatedstyle]}> */}
      <Animated.View style={[styles.firstset, reanimatedstyle]}>
        <View style={styles.firstitle}>
          <Text style={styles.firstitletxt}>GLOWDG</Text>
        </View>
        <Text style={styles.firstsettxt}>Create New Account</Text>
      </Animated.View>
      <View style={styles.inputcontainer}>
        <Input style={styles.input} placeholder="Name" />
        <Input style={styles.input} placeholder="Email" />
        <Input style={styles.input} placeholder="Password" />
        <Input style={styles.input} placeholder="Confirm Password" />

        <Button
          color={PrimaryColor}
          containerStyle={styles.btn}
          onPress={() => navigation.goBack()}
        >
          Sign Up
        </Button>
        <View style={styles.lastsec}>
          <Text style={styles.lasttxt}>Already have an account?</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.lastpress}> Login</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstset: {
    height: height / 3,
    backgroundColor: PrimaryColor,
    // borderBottomRightRadius: height / 10,
    // borderBottomLeftRadius: height / 10,
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
    bottom: height / 18,
    right: height / 20,
    fontFamily: "Roboto_500Medium",
    fontSize: secSmallSize / 1.2,
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

  btn: {
    marginTop: height / 30,
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
    marginTop: height / 18,
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
