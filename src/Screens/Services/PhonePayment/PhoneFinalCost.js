import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  PrimaryColor,
  BlackColor,
  WhiteColor,
} from "../../../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../../../constants/Sized";
import { Divider, Input, Button } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import LottieView from "lottie-react-native";
import { Overlay } from "react-native-elements";
import { Api_url } from "../../../uitlties/ApiConstants";

const PhoneFinalCost = ({ navigation, route }) => {
  const { type, repair } = route.params;
  const [error, setError] = useState("");
  const [loadingbtn, setLoadingbtn] = useState(false);
  const [showModal, setShowModal] = useState("");
  const animation = useRef(null);
  const { t } = useTranslation();
  const HandleSubmitFromFormik = (phone, email) => {
    setShowModal(false);
    setLoadingbtn(true);
    const url =
      Api_url +
      `?phoneform=yes&top=${type}&whrepaired=${repair}&cnmb=${phone}&custemail=${email}`;
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
        setLoadingbtn(false);
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
          source={require("../../../img/33886-check-okey-done.json")}
        />
        <Pressable style={styles.centerizedCol}>
          <Text>{t("datasucess")}</Text>
        </Pressable>
      </Overlay>
      {/* end of modal */}
      <ScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
        <View style={styles.container}>
          <Formik
            initialValues={{
              phone: "",
              email: "",
            }}
            onSubmit={async (values) => {
              if (values.phone && values.email) {
                HandleSubmitFromFormik(values.phone, values.email);
              } else {
                setError(t("formcomplete"));
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View style={styles.subformmaincontainer}>
                  {/* <Text style={styles.subformmaincontainertitle}>
                    {t("Finalcost")}
                  </Text> */}
                  {/* <View style={styles.subformcontainer}>
                    <Text style={styles.subformtitle}>
                      {t("Thefinalestimatedpriceis")}
                    </Text>
                    <Text style={styles.subformmaincontainertitle}>
                      {t("Dirham")} 0
                    </Text>
                    <Text style={styles.subformtitle}>
                      {t("EnteryourNumber")}
                    </Text>
                    <Input
                      style={styles.subforminput}
                      value={values.type}
                      onChangeText={handleChange("type")}
                      onBlur={handleBlur("type")}
                    />
                  </View> */}
                  <View style={styles.subformcontainer}>
                    <Text style={styles.subformtitle}>Message</Text>
                    <Input
                      style={styles.subforminput}
                      value={values.repair}
                      onChangeText={handleChange("repair")}
                      onBlur={handleBlur("repair")}
                    />
                  </View>

                  <View style={styles.subformcontainer}>
                    <Text style={styles.subformtitle}>
                      {t("Enteryouremail")}
                    </Text>
                    <Input
                      style={styles.subforminput}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      leftIcon={<Icon name="user" size={24} color="black" />}
                    />
                  </View>
                  <View style={styles.subformcontainer}>
                    <Text style={styles.subformtitle}>{t("phoneNum")}</Text>
                    <Input
                      style={styles.subforminput}
                      value={values.phone}
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      leftIcon={<Icon name="phone" size={24} color="black" />}
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
                      buttonStyle={styles.btntxt}
                      color="secondary"
                      loading={loadingbtn}
                      // onPress={() => navigation.navigate("Summary1")}
                      onPress={handleSubmit}
                    >
                      {t("Submit")}
                    </Button>
                  </View>
                  <View style={styles.previouscontainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                      <Text style={styles.previouscontainertxt}>
                        {t("PreviousStep")}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default PhoneFinalCost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subformmaincontainer: {
    backgroundColor: PrimaryColor,
    width: width / 1.2,
    marginTop: height / 15,
    position: "relative",
    borderTopWidth: 3,
    borderTopColor: BlackColor,
    borderRadius: 20,
    padding: width / 30,
  },

  subformmaincontainertitle: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    paddingVertical: height / 30,
    fontSize: smallSize * 1.5,
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
    color: WhiteColor,
    width: width / 5,
    marginLeft: width / 3.5,
    fontSize: secSmallSize,
    borderRadius: 20,
  },
  btntxt: {
    fontSize: secSmallSize / 1.3,
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
