import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import { PrimaryColor, BlackColor, WhiteColor } from "../../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../../constants/Sized";
import { Divider, Input, Button } from "@rneui/themed";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Api_url } from "../../uitlties/ApiConstants";
import { Overlay } from "react-native-elements";
import LottieView from "lottie-react-native";
const Courier = ({ navigation }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState("");
  const [error, setError] = useState("");
  const animation = useRef(null);

  const HandleSubmitFromFormik = (
    sDetails,
    sLocation,
    sNumber,
    rLocation,
    rNumber,
    Number,
    email
  ) => {
    setShowModal(false);
    const url =
      Api_url +
      `?coudelivery=yes&shipmentdetails=${sDetails}&senderlocation=${sLocation}&sendercontactnumber=${sNumber}&reclocations${rLocation}&reccontactnmber=${rNumber}&cnmb=${Number}&custemail=${email}`;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        console.log(res.data);
      })
      .then((res) => {
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      {/* start of modal */}
      <Overlay
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
      >
        <LottieView
          autoPlay
          loop={false}
          ref={animation}
          style={{
            width: 100,
            height: 200,
            backgroundColor: "#eee",
          }}
          source={require("../../img/33886-check-okey-done.json")}
        />
        <Pressable style={styles.centerizedCol}>
          <Text>{t("datasucess")}</Text>
        </Pressable>
      </Overlay>
      {/* end of modal */}
      <View style={styles.container}>
        <Text style={styles.maintxt}>{t("courier")}</Text>
        <Formik
          initialValues={{
            sDetails: "",
            sLocation: "",
            sNumber: "",
            rLocation: "",
            rNumber: "",
            Number: "",
            email: "",
          }}
          onSubmit={(values) => {
            if (
              values.sDetails &&
              values.sLocation &&
              values.sNumber &&
              values.rLocation &&
              values.rNumber &&
              values.Number &&
              values.email
            ) {
              HandleSubmitFromFormik(
                values.sDetails,
                values.sLocation,
                values.sNumber,
                values.rLocation,
                values.rNumber,
                values.Number,
                values.email
              );
            } else {
              setError("Complete The Form Please");
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={styles.subformmaincontainer}>
                {/* <Text style={styles.subformmaincontainertitle}>
                  {t("courier")}
                </Text> */}
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>
                    {t("shipmentdetails")}
                  </Text>
                  <Input
                    style={styles.subforminput}
                    value={values.sDetails}
                    onChangeText={handleChange("sDetails")}
                    onBlur={handleBlur("sDetails")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("sLocation")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.sLocation}
                    onChangeText={handleChange("sLocation")}
                    onBlur={handleBlur("sLocation")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("sendernum")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.sNumber}
                    onChangeText={handleChange("sNumber")}
                    onBlur={handleBlur("sNumber")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("rLocation")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.rLocation}
                    onChangeText={handleChange("rLocation")}
                    onBlur={handleBlur("rLocation")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("rContact")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.rNumber}
                    onChangeText={handleChange("rNumber")}
                    onBlur={handleBlur("rNumber")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("number2")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.Number}
                    onChangeText={handleChange("Number")}
                    onBlur={handleBlur("Number")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("youremail")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                </View>
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
                <View style={styles.btn}>
                  <Button
                    color="secondary"
                    // onPress={() => navigation.navigate("PhoneFinalCost")}
                    onPress={handleSubmit}
                  >
                    {t("Next")}
                  </Button>
                </View>
                <View style={styles.previouscontainer}>
                  <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.previouscontainertxt}>
                      {t("GoBack")}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Courier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  maintxt: {
    fontSize: TitleSize / 2,
    fontFamily: "Roboto_700Bold",
    color: BlackColor,
    marginTop: height / 20,
  },
  input: {
    width: width / 5,
  },
  subformmaincontainer: {
    backgroundColor: PrimaryColor,
    width: width / 1.2,
    marginTop: height / 15,
    position: "relative",
    borderTopWidth: 4,
    borderTopColor: BlackColor,
  },

  subformmaincontainertitle: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    paddingVertical: height / 30,
    fontSize: smallSize,
  },
  subformcontainer: {
    marginVertical: height / 50,
  },
  subformtitle: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
  btn: {
    backgroundColor: BlackColor,
    width: width / 5,
    marginLeft: width / 3,
    fontSize: secSmallSize,
  },
  previouscontainer: {
    marginVertical: height / 35,
  },
  previouscontainertxt: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
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
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});
