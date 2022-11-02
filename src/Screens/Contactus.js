import React, { useState } from "react";
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

const Contactus = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const HandleSubmitData = async (name, email, subject, message) => {
    console.log("name", name);
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);
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
          <Text>{t("Submitted")}</Text>
        </View>
      </Overlay>
      {/* end of modal */}
      <View style={styles.firstset}>
        <View style={styles.firstitle}>
          <Text style={styles.firstitletxt}>{t("ContactUs")}</Text>
        </View>
      </View>

      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        onSubmit={async (values) => {
          if (values.name && values.email && values.subject && values.message) {
            await HandleSubmitData(
              values.name,
              values.email,
              values.subject,
              values.message
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
              placeholder={t("yourname")}
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
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
              placeholder={t("Subject")}
              value={values.subject}
              onChangeText={handleChange("subject")}
              onBlur={handleBlur("subject")}
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
      <View style={styles.lastsec}>
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
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Contactus;

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
});
