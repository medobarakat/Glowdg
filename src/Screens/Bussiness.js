import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BlackColor, PrimaryColor, GrayColor } from "../constants/Colors";
import { height, TitleSize, width } from "../constants/Sized";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Overlay, Divider } from "react-native-elements";
import { Formik } from "formik";
import { Button, Icon } from "@rneui/themed";
import Svg, { G, Path } from "react-native-svg";

const Bussiness = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const number = "+971507410693";
  const message = "Hello GlowDg I Want To make An Order";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.whatsappicon}
        onPress={() => {
          Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`);
        }}
      >
        <Svg
          width="60px"
          height="60px"
          viewBox="-0.348 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
        >
          <G>
            <Path
              d="M15.676 51.387L16.645 51.872C20.686 54.298 25.21 55.428 29.733 55.428L29.733 55.428C43.955 55.428 55.59 43.793 55.59 29.573C55.59 22.786 52.842 16.161 47.995 11.312C43.145 6.466 36.682 3.718 29.733 3.718C15.512 3.718 3.877 15.353 4.04 29.733C4.04 34.582 5.494 39.267 7.918 43.308L8.566 44.278L5.979 53.813L15.676 51.387Z"
              fill="#00E676"
            />
            <Path
              d="M50.742 8.725C45.247 3.07 37.653 0 29.896 0C13.412 0 0.162 13.412 0.323 29.733C0.323 34.906 1.778 39.915 4.202 44.44L0 59.79L15.676 55.75C20.038 58.175 24.886 59.306 29.733 59.306L29.733 59.306C46.055 59.306 59.306 45.893 59.306 29.573C59.306 21.655 56.235 14.22 50.742 8.725ZM29.896 54.298L29.896 54.298C25.533 54.298 21.17 53.165 17.453 50.902L16.482 50.418L7.11 52.842L9.535 43.63L8.887 42.662C1.778 31.188 5.17 15.997 16.805 8.887C28.44 1.778 43.47 5.17 50.58 16.805C57.69 28.44 54.298 43.47 42.662 50.58C38.945 53.003 34.42 54.298 29.896 54.298ZM44.115 36.36L42.337 35.55C42.337 35.55 39.753 34.42 38.137 33.612C37.975 33.612 37.812 33.45 37.653 33.45C37.167 33.45 36.845 33.612 36.52 33.773L36.52 33.773C36.52 33.773 36.36 33.935 34.098 36.52C33.935 36.845 33.612 37.006 33.29 37.006L33.127 37.006C32.965 37.006 32.642 36.845 32.48 36.682L31.673 36.36L31.673 36.36C29.896 35.55 28.28 34.582 26.988 33.29C26.663 32.965 26.178 32.642 25.855 32.32C24.725 31.188 23.592 29.896 22.786 28.44L22.622 28.118C22.463 27.955 22.463 27.796 22.299 27.473C22.299 27.147 22.299 26.825 22.463 26.663C22.463 26.663 23.107 25.855 23.592 25.37C23.918 25.047 24.078 24.563 24.399 24.24C24.725 23.755 24.886 23.107 24.725 22.622C24.563 21.814 22.622 17.453 22.138 16.482C21.814 15.997 21.492 15.838 21.007 15.676L20.522 15.676C20.199 15.676 19.714 15.676 19.23 15.676C18.907 15.676 18.582 15.838 18.261 15.838L18.1 15.997C17.776 16.161 17.453 16.482 17.13 16.645C16.805 16.968 16.645 17.29 16.32 17.614C15.19 19.068 14.542 20.845 14.542 22.622L14.542 22.622C14.542 23.918 14.868 25.21 15.353 26.34L15.512 26.825C16.968 29.896 18.907 32.642 21.492 35.067L22.138 35.712C22.622 36.198 23.107 36.52 23.433 37.006C26.825 39.915 30.702 42.015 35.067 43.145C35.55 43.308 36.198 43.308 36.682 43.47L36.682 43.47C37.167 43.47 37.812 43.47 38.298 43.47C39.108 43.47 40.075 43.145 40.722 42.822C41.208 42.501 41.53 42.501 41.853 42.178L42.178 41.853C42.501 41.53 42.822 41.367 43.145 41.045C43.47 40.722 43.793 40.401 43.955 40.075C44.278 39.43 44.44 38.622 44.601 37.812C44.601 37.49 44.601 37.006 44.601 36.682C44.601 36.682 44.44 36.52 44.115 36.36Z"
              fill="#FFFFFF"
            />
          </G>
        </Svg>
      </TouchableOpacity>
      <KeyboardAwareScrollView>
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
    </View>
  );
};

export default Bussiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  whatsappicon: {
    position: "absolute",
    right: width / 20,
    bottom: height / 20,
    zIndex: 10,
  },
});
