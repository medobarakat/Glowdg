import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Formik } from "formik";
import { Button } from "@rneui/themed";
import { Input, Overlay } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../constants/Sized";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useTranslation } from "react-i18next";

const Membership = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const HandleSubmitData = async (
    firstname,
    lastname,
    numbers,
    location,
    data
  ) => {
    console.log("firstname", firstname);
    console.log("lastname", lastname);
    console.log("numbers", numbers);
    console.log("location", location);
    console.log("data", data);
    // axios
    //   .post(Api_url, {
    //     params: {
    //       username,
    //       password,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      {/* start of modal */}
      <Overlay
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
      >
        <View style={styles.centerizedCol}>
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          <Text>Submitted</Text>
        </View>
      </Overlay>
      {/* end of modal */}
      <View style={styles.firstset}>
        <View style={styles.firstitle}>
          <Text style={styles.firstitletxt}>{t("GLOWDGmembership")}</Text>
        </View>
      </View>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          numbers: "",
          location: "",
          data: "",
        }}
        onSubmit={async (values) => {
          if (
            values.username &&
            values.lastname &&
            values.numbers &&
            values.location &&
            values.data
          ) {
            await HandleSubmitData(
              values.username,
              values.lastname,
              values.numbers,
              values.location,
              values.data
            );
          } else {
            setError(t("formcomplete"));
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Animated.View
            style={styles.inputcontainer}
            entering={FadeIn}
            exiting={FadeOut}
          >
            <Input
              style={styles.input}
              placeholder={t("Firstname")}
              value={values.username}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
            />
            <Input
              style={styles.input}
              placeholder={t("Lastname")}
              value={values.lastname}
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
            />
            <Input
              style={styles.input}
              placeholder={t("Numbers")}
              value={values.numbers}
              onChangeText={handleChange("numbers")}
              onBlur={handleBlur("numbers")}
            />
            <Input
              style={styles.input}
              placeholder={t("Location")}
              value={values.location}
              onChangeText={handleChange("location")}
              onBlur={handleBlur("location")}
            />
            <Input
              style={styles.input}
              placeholder={t("AnySpecificRequest")}
              value={values.data}
              onChangeText={handleChange("data")}
              onBlur={handleBlur("data")}
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
                      {t("checkconnection")}
                    </Text>
                  </View>
                )}
              </View>
            </View>
            {/* end of error handling */}
            <Button
              color={PrimaryColor}
              containerStyle={styles.btn}
              onPress={handleSubmit}
            >
              {t("Submit")}
            </Button>
          </Animated.View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Membership;

const styles = StyleSheet.create({
  firstitle: {
    display: "flex",
    marginVertical: height / 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  firstitletxt: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
    fontSize: TitleSize / 2.5,
    color: BlackColor,
  },
  inputcontainer: {
    marginTop: height / 20,
    width: width / 1.5,
    marginLeft: width / 6,
  },
  input: {
    width: width / 5,
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
