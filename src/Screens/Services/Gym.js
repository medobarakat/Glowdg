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

const Gym = ({ navigation }) => {
  const { t } = useTranslation();
  const [value1, setValue1] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [error, setError] = useState("");

  const data = [
    { label: "Silver star - Hamdan Street , Abu Dhabi", value: "SilversStar" }, //200
    { label: "Golden Gym", value: "GoldenGym" }, //300
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

  const handleGym = () => {
    if (value1 == null || value == null) {
      setError(t("formcomplete"));
    } else {
      setError(false);
      navigation.navigate("Summary2", {
        gym: value1,
        noOfMonths: value,
      });
    }
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>{t("GymMembershipForm")}</Text>

        <View>
          <View style={styles.subformmaincontainer}>
            <View style={styles.subformcontainer}>
              <Text style={styles.subformtitle}>{t("SelectGym")}</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
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
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
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
                onPress={handleGym}
              >
                Next
              </Button>
            </View>
          </View>
        </View>
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
    borderTopWidth: 3,
    borderTopColor: BlackColor,
    borderRadius: 20,
    padding: width / 30,
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
