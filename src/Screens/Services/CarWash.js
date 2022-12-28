import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

const CarWash = ({ navigation }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [error, setError] = useState("");

  const data = [
    { label: "Sedan", value: "1" },
    { label: "4x4", value: "2" },
  ];

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>TYPE OF CAR</Text>
        <Formik
          initialValues={{
            type: "",
          }}
          onSubmit={(values) => {
            if (value !== null) {
              navigation.navigate("CarWashForm", { value: value });
            } else {
              setError(t("formcomplete"));
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={styles.subformmaincontainer}>
                <View style={styles.subformcontainer}>
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
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
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

                <View style={styles.btn}>
                  <Button
                    color="secondary"
                    // onPress={() => navigation.navigate("Summary4")}
                    onPress={handleSubmit}
                  >
                    {t("Next")}
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

export default CarWash;

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
});
