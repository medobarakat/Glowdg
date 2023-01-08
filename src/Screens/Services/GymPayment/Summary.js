import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import { Divider, Input, Button } from "@rneui/themed";
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
import { Overlay } from "react-native-elements";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Api_url } from "../../../uitlties/ApiConstants";
import axios from "axios";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Summary = ({ navigation, route }) => {
  const { gym, noOfMonths } = route.params;
  const { t } = useTranslation();
  const animation = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [error, setError] = useState("");
  const IsGuest = useSelector((state) => state.auth.IsGuest);

  const HandleSendingData = (phone, email) => {
    if (IsGuest) {
      setShowModal(true);
    } else {
      const url =
        Api_url +
        `?gymform=yes&sgym=${gym}&noofmonths=${noOfMonths}&cnmb=${phone}&custemail=${email}`;
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      axios
        .get(url, config)
        .then((res) => {
          setError(false);
        })
        .then((res) => {
          setShowModal2(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
        {/* start of guest modal */}
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
            source={require("../../../img/74164-warning.json")}
          />
          <Pressable style={styles.centerizedCol}>
            <Text>{t("LoginPleaseToConfirmOrder")}</Text>
          </Pressable>
        </Overlay>
        {/* end of guest modal */}
        {/* start of modal */}
        <Overlay
          isVisible={showModal2}
          onBackdropPress={() => setShowModal2(false)}
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

        <Formik
          initialValues={{
            // type: "",
            // repair: "",
            phone: "",
            email: "",
          }}
          onSubmit={async (values) => {
            if (values.phone && values.email) {
              HandleSendingData(values.phone, values.email);
            } else {
              setError(t("formcomplete"));
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={styles.subformmaintxt1}>{t("Summary")}</Text>
              <View style={styles.subformmaincontainer}>
                <View style={styles.subformmain}>
                  <Text style={styles.subformmaintxt}>
                    {gym === "SilversStar" ? (
                      <Text>{t("silverstartadress")}</Text>
                    ) : (
                      <Text>{t("Golden Gym")}</Text>
                    )}
                  </Text>
                </View>
                <View style={styles.subformmain}>
                  <Text style={styles.subformmaintxt}>
                    {t("NumberofMonths")} {noOfMonths}
                  </Text>
                </View>
                <View style={styles.subformmainlast}>
                  <Text style={styles.subformmainlasttxt1}>{t("Total")} :</Text>
                  <Text style={styles.subformmainlasttxt2}>
                    {gym === "SilversStar" ? (
                      <Text>{noOfMonths * 200}</Text>
                    ) : (
                      <Text>{noOfMonths * 300}</Text>
                    )}{" "}
                    {t("Dirham")}
                  </Text>
                </View>
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
              <View style={styles.subformcontainer}>
                <Text style={styles.subformtitle}>{t("phoneNum")}</Text>
                <Input
                  style={styles.subforminput}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
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
                  onPress={handleSubmit}
                  // onPress={orderhandler}
                >
                  {t("Order")}
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
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: PrimaryColor,
  },
  subformmaincontainer: {
    width: width / 1.2,
    marginTop: height / 15,
    position: "relative",
    borderWidth: 1,
    borderColor: BlackColor,
    backgroundColor: WhiteColor,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subformmain: {
    marginVertical: height / 25,
  },
  subformmaintxt1: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
    marginTop: height / 20,
  },
  subformmaintxt: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
  subformmainlast: {
    marginVertical: height / 30,
  },
  subformmainlasttxt1: {
    textAlign: "center",
    fontFamily: "Roboto_700Bold",
  },
  subformmainlasttxt2: {
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    color: "green",
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
  subformcontainer: {
    marginVertical: height / 80,
  },
});
