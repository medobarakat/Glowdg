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

const Gym = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Silver star - Hamdan Street , Abu Dhabi", value: "1" },
    { label: "Golden Gym", value: "2" },
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
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>Gym membership form</Text>
        <Formik
          initialValues={{
            type: "",
            repair: "",
            contact: "",
          }}
          onSubmit={async (values) => {
            if (values.type && values.repair && values.contact) {
              await HandleLogIn(values.type, values.repair, values.contact);
            } else {
              setError("Complete The Form Please");
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={styles.subformmaincontainer}>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>Select Gym</Text>
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
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>Number of Months</Text>
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
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>

                <View style={styles.btn}>
                  <Button
                    color="secondary"
                    onPress={() => navigation.navigate("Summary2")}
                    // onPress={handleSubmit}
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
});
