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
import { Dropdown } from "react-native-element-dropdown";
import { useTranslation } from "react-i18next";
import { Api_url } from "../../uitlties/ApiConstants";
import axios from "axios";
import LottieView from "lottie-react-native";
import { Overlay } from "react-native-elements";

const Gym = ({ navigation }) => {
  const animation = useRef(null);

  const { t } = useTranslation();
  const [value1, setValue1] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState("");

  const data = [
    { label: "Silver star - Hamdan Street , Abu Dhabi", value: "SilversStar" },
    { label: "Golden Gym", value: "GoldenGym" },
  ];
  const data1 = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
  ];

  const HandleLogIn = (phone, email) => {
    // console.log(value1);
    // console.log(value);
    // console.log(phone);
    // console.log(email);
    // setShowModal(false);
    const url =
      Api_url +
      `?gymform=yes&sgym=${value1}&noofmonths=${value}&cnmb=${phone}&custemail=${email}`;
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
        <Text style={styles.maintxt}>{t("GymMembershipForm")}</Text>
        <Formik
          initialValues={{
            // type: "",
            // repair: "",
            phone: "",
            email: "",
          }}
          onSubmit={async (values) => {
            if (values.phone && values.email) {
              HandleLogIn(values.phone, values.email);
            } else {
              setError(t("formcomplete"));
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={styles.subformmaincontainer}>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("SelectGym")}</Text>
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus && { borderColor: "blue" },
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? "Select item" : "..."}
                    searchPlaceholder={t("Search")}
                    value={value1}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue1(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("NumberofMonths")}</Text>
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus && { borderColor: "blue" },
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data1}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? "Select item" : "..."}
                    searchPlaceholder={t("Search")}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item.value);
                      setIsFocus(false);
                      // console.log(item);
                      // handleChange("repair");
                    }}
                  />
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
                    //onPress={() => navigation.navigate("Summary2")}
                    onPress={handleSubmit}
                  >
                    Next
                  </Button>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Gym;

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
    borderRadius: 15,
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
    marginBottom: 10,
  },
  selectedTextStyle: {
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
