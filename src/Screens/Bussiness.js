import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BlackColor, PrimaryColor, GrayColor } from "../constants/Colors";
import { height, TitleSize, width } from "../constants/Sized";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Overlay, Divider } from "react-native-elements";
import { Formik } from "formik";
import { Button, Icon } from "@rneui/themed";

const Bussiness = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          <Text style={styles.firstitletxt}>{t("BusinessInquiries")}</Text>
        </View>
      </View>

      <Formik
        initialValues={{
          companyname: "",
          Subject: "",
          Details: "",
          email: "",
          number: "",
        }}
        onSubmit={async (values) => {
          if (
            values.companyname &&
            values.Subject &&
            values.Details &&
            values.email &&
            values.number
          ) {
            await HandleSubmitData(
              values.companyname,
              values.Subject,
              values.Details,
              values.email,
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
              placeholder={t("companyName")}
              value={values.companyname}
              onChangeText={handleChange("companyname")}
              onBlur={handleBlur("companyname")}
            />
            <Input
              style={styles.input}
              placeholder={t("Subject")}
              value={values.Subject}
              onChangeText={handleChange("Subject")}
              onBlur={handleBlur("Subject")}
            />
            <Input
              style={styles.input}
              placeholder={t("details2")}
              value={values.Details}
              onChangeText={handleChange("Details")}
              onBlur={handleBlur("Details")}
            />
            <Input
              style={styles.input}
              placeholder={t("contact2")}
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />

            <Input
              style={styles.input}
              placeholder={t("number2")}
              value={values.number}
              onChangeText={handleChange("number")}
              onBlur={handleBlur("number")}
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
    </KeyboardAwareScrollView>
  );
};

export default Bussiness;

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
