import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
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
import axios from "axios";

import { Formik } from "formik";
import { Api_url } from "../../uitlties/ApiConstants";
import { useDispatch } from "react-redux";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const HandleSignUp = async (username, password, email) => {
    const url =
      Api_url +
      `?uname=${username}&upass=${password}&uemail=${email}&flg=create`;

    console.log(url)
    //! un comment these
    // const config = {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Accept: "application/json",
    //   },
    // };
    // setShowModal(true);
    // axios
    //   .post(url, config)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
        }}
        onSubmit={async (values) => {
          if (values.password === values.confirmPassword) {
            await HandleSignUp(values.username, values.password, values.email);
          } else {
            setError("Confirm Password Is Not The Same Password");
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Animated.View style={[styles.firstset, reanimatedstyle]}>
              <View style={styles.firstitle}>
                <Text style={styles.firstitletxt}>GLOWDG</Text>
              </View>
              <Text style={styles.firstsettxt}>Create New Account</Text>
            </Animated.View>
            <View style={styles.inputcontainer}>
              <Input
                style={styles.input}
                placeholder="User name"
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
              />
              <Input
                style={styles.input}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <Input
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <Input
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
              />
              {/* for error handling */}

              <View>
                <View>
                  {error && (
                    <View style={styles.errmessage}>
                      <Text style={styles.errmessagetxt}>{error}</Text>
                    </View>
                  )}
                </View>
                <View>
                  {error === undefined && (
                    <View style={styles.errmessage}>
                      <Text style={styles.errmessagetxt}>
                        {" "}
                        Check Your Connection and retry to log in{" "}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              {/* end of error handling */}
              <Button
                onPress={handleSubmit}
                color={PrimaryColor}
                containerStyle={styles.btn}
              // onPress={() => navigation.goBack()}
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
          </View>
        )}
      </Formik>
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
  errmessage: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  errmessagetxt: {
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
    color: "red",
  },
});
