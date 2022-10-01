import { StyleSheet, Text, View } from "react-native";
import React from "react";
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

const PhoneFinalCost = () => {
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
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
                <Text style={styles.subformmaincontainertitle}>Final cost</Text>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>Type Of Phone</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.type}
                    onChangeText={handleChange("type")}
                    onBlur={handleBlur("type")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>
                    What needs to be repaired
                  </Text>
                  <Input
                    style={styles.subforminput}
                    value={values.repair}
                    onChangeText={handleChange("repair")}
                    onBlur={handleBlur("repair")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>Contact Number</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.contact}
                    onChangeText={handleChange("contact")}
                    onBlur={handleBlur("contact")}
                  />
                </View>
                <View style={styles.btn}>
                  <Button
                    color="secondary"
                    onPress={() => navigation.navigate("PhoneFinalCost")}
                    // onPress={handleSubmit}
                  >
                    Login
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
    borderTopWidth: 4,
    borderTopColor: BlackColor,
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
    width: width / 5,
    marginLeft: width / 3,
  },
});
