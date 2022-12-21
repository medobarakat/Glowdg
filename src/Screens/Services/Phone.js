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
const Phone = ({ navigation }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState("");
  const [error, setError] = useState("");
  const animation = useRef(null);

  const HandleSubmitFromFormik = (type, repair, contact, email) => {
    setShowModal(false);
    const url =
      Api_url +
      `?phoneform=yes&top=${type}&whrepaired=${repair}&cnmb=${contact}&custemail=${email}`;
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
        <Text style={styles.maintxt}>{t("PhoneMaintenanceForm")}</Text>
        <Formik
          initialValues={{
            type: "",
            repair: "",
            contact: "",
            email: "",
          }}
          onSubmit={(values) => {
            if (
              values.type &&
              values.repair &&
              values.contact &&
              values.email
            ) {
              HandleSubmitFromFormik(
                values.type,
                values.repair,
                values.contact,
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
                <Text style={styles.subformmaincontainertitle}>
                  {t("PhoneMaintenanceForm")}
                </Text>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("TypeOfPhone")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.type}
                    onChangeText={handleChange("type")}
                    onBlur={handleBlur("type")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>
                    {t("Whatneedstoberepaired")}
                  </Text>
                  <Input
                    style={styles.subforminput}
                    value={values.repair}
                    onChangeText={handleChange("repair")}
                    onBlur={handleBlur("repair")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("ContactNumber")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.contact}
                    onChangeText={handleChange("contact")}
                    onBlur={handleBlur("contact")}
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

export default Phone;

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
