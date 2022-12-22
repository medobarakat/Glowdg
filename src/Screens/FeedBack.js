import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Formik } from "formik";
import { Button, Icon } from "@rneui/themed";
import { Input, Overlay, Divider } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  PrimaryColor,
  BlackColor,
  WhiteColor,
  GrayColor,
} from "../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../constants/Sized";
import { useTranslation } from "react-i18next";
import LottieView from "lottie-react-native";
import axios from "axios";
import { Api_url } from "../uitlties/ApiConstants";

const Feedback = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const animation = useRef(null);
  const HandleSubmitData = async (exp, comment, email, message, number) => {
    setShowModal(false);
    const url =
      Api_url +
      `?feedback=yes&howisyourexperience=${exp}&anycomments=${comment}&cmessage=${message}&cnmb=${number}&custemail=${email}`;
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
    <KeyboardAwareScrollView style={styles.container}>
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
          source={require("../img/33886-check-okey-done.json")}
        />
        <Pressable style={styles.centerizedCol}>
          <Text>{t("datasucess")}</Text>
        </Pressable>
      </Overlay>
      {/* end of modal */}
      <View style={styles.firstset}>
        <View style={styles.firstitle}>
          <Text style={styles.firstitletxt}>{t("howisyourex")}</Text>
        </View>
      </View>

      <Formik
        initialValues={{
          exp: "",
          comment: "",
          email: "",
          message: "",
          number: "",
        }}
        onSubmit={async (values) => {
          if (
            values.number &&
            values.exp &&
            values.comment &&
            values.email &&
            values.message
          ) {
            await HandleSubmitData(
              values.exp,
              values.comment,
              values.email,
              values.message,
              values.number
            );
          } else {
            setError(t("formcomplete"));
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.inputcontainer}>
            <Input
              style={styles.input}
              placeholder={t("howisyourex")}
              value={values.exp}
              onChangeText={handleChange("exp")}
              onBlur={handleBlur("exp")}
            />
            <Input
              style={styles.input}
              placeholder={t("anycomments")}
              value={values.comment}
              onChangeText={handleChange("comment")}
              onBlur={handleBlur("comment")}
            />
            <Input
              style={styles.input}
              placeholder={t("youremail")}
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <Input
              style={styles.input}
              placeholder={t("EnteryourNumber")}
              value={values.number}
              onChangeText={handleChange("number")}
              onBlur={handleBlur("number")}
            />
            <Input
              style={styles.input}
              placeholder={t("optionalmessage")}
              value={values.message}
              onChangeText={handleChange("message")}
              onBlur={handleBlur("message")}
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
          </View>
        )}
      </Formik>
      {/* <View style={styles.lastsec}>
        <Divider />
        <View>
          <View style={styles.highterlogo}>
            <Icon name="call" />
            <Text style={styles.highterlogotxt}>{t("calluson")}</Text>
          </View>
          <Divider />
          <View style={styles.lastttxtcontainer}>
            <Text style={styles.lastttxttitle}>{t("karamstore")}</Text>
            <View style={styles.lastttxtcontainer2}>
              <Text style={styles.lastttxttitle2}>{t("CustomerService")}</Text>
              <Text style={styles.lastttxttitle}>6-146-389-575</Text>
            </View>
          </View>
        </View>
        <Divider />
        <View>
          <View style={styles.lastttxtcontainer}>
            <Text style={styles.lastttxttitle}>
              GYM SILVERSTAR FITNESS CLUB AAL ,405 – Zone 3 – 01 Hamdan Bin
              Mohammed St – Abu Dhabi
            </Text>
            <View style={styles.lastttxtcontainer2}>
              <Text style={styles.lastttxttitle2}>{t("CustomerService")}</Text>
              <Text style={styles.lastttxttitle}>055 153 5516</Text>
            </View>
          </View>
        </View>
      </View> */}
    </KeyboardAwareScrollView>
  );
};

export default Feedback;

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
  lastsec: {
    marginLeft: width / 30,
    marginTop: width / 30,
  },
  highterlogo: {
    display: "flex",
    flexDirection: "row",
    marginVertical: width / 30,
  },
  highterlogotxt: {
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
    color: BlackColor,
    marginLeft: width / 30,
  },
  lastttxtcontainer: {
    display: "flex",
  },
  lastttxttitle: {
    color: GrayColor,
    fontFamily: "Roboto_700Bold",
    marginVertical: width / 35,
  },
  lastttxttitle2: {
    color: BlackColor,
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
  },
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});
