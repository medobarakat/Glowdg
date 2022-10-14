import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
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
import { Input, Overlay } from "react-native-elements";
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

const Login = ({ navigation }) => {
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const progress = useSharedValue(0);
  const reanimatedstyle = useAnimatedStyle(() => {
    return {
      borderBottomLeftRadius: progress.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(height / 7, { duration: 3000 });
  }, []);

  // const HandleLogIn = async (username, password) => {
  //   axios
  //     .post(Api_url, {
  //       params: {
  //         username,
  //         password,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const HandleLogIn = async (username, password) => {
    const url = Api_url + `?uname=${username}&upass=${password}&flg=bUa5J4`;

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    setShowModal(true);
    axios
      .post(url, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const UserLogin = async (username, password) =>
  //   await axios({
  //     method: "POST",
  //     url: Api_url,
  //     params: {
  //       username,
  //       password,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(handlelogIn(res.data))
  //        navigate("/admin/home");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {/* start of modal */}
      <Overlay
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
      >
        <View style={styles.centerizedCol}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Overlay>
      {/* end of modal */}
      <Animated.View style={[styles.firstset, reanimatedstyle]}>
        <View style={styles.firstitle}>
          <Text style={styles.firstitletxt}>GLOWDG</Text>
        </View>
        <Text style={styles.firstsettxt}>Login</Text>
      </Animated.View>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          if (values.password && values.username) {
            await HandleLogIn(values.username, values.password);
          } else {
            setError("Type Your Username and Password");
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.inputcontainer}>
            <Input
              style={styles.input}
              placeholder="User name"
              leftIcon={{ type: "font-awesome", name: "user" }}
              value={values.username}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
            />
            <Input
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              leftIcon={{ type: "font-awesome", name: "lock" }}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            <Pressable style={styles.forget}>
              <Text style={styles.forgettxt}>Forget Password ?</Text>
            </Pressable>
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
              color={PrimaryColor}
              containerStyle={styles.btn}
              onPress={() => navigation.navigate("home1")}
            // onPress={handleSubmit}
            >
              Login
            </Button>
            <View style={styles.lastsec}>
              <Text style={styles.lasttxt}>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.lastpress}> Register</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
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
    // borderBottomLeftRadius: height / 7,
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
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
