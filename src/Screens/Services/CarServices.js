import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
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
import { useTranslation } from "react-i18next";

const CarServices = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>{t("CarServiceForm")}</Text>
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
              setError(t("formcomplete"));
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={styles.subformmaincontainer}>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("TYPEOFCAR")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.type}
                    onChangeText={handleChange("type")}
                    onBlur={handleBlur("type")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>
                    {t("Whatneedstoberepaired")}
                  </Text>
                  <Input
                    style={styles.subforminput}
                    value={values.repair}
                    onChangeText={handleChange("repair")}
                    onBlur={handleBlur("repair")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("yourname")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.contact}
                    onChangeText={handleChange("contact")}
                    onBlur={handleBlur("contact")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("ContactNumber")}</Text>
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
                    onPress={() => navigation.navigate("Summary3")}
                    // onPress={handleSubmit}
                  >
                    {t("Next")}
                  </Button>
                </View>
                <View style={styles.previouscontainer}>
                  <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.previouscontainertxt}>
                      {t("GoBack")}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CarServices;

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

  subformmaincontainertitle: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    paddingVertical: height / 30,
    fontSize: smallSize,
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
  previouscontainer: {
    marginVertical: height / 35,
  },
  previouscontainertxt: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
  },
});
