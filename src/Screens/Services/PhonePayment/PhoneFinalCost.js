import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
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
import { useTranslation } from "react-i18next";

const PhoneFinalCost = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <ScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
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
                setError(t("formcomplete"));
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View style={styles.subformmaincontainer}>
                  <Text style={styles.subformmaincontainertitle}>
                    {t("Finalcost")}
                  </Text>
                  <View style={styles.subformcontainer}>
                    <Text style={styles.subformtitle}>
                      {t("Thefinalestimatedpriceis")}
                    </Text>
                    <Text style={styles.subformmaincontainertitle}>
                      {t("Dirham")} 0
                    </Text>
                    <Text style={styles.subformtitle}>
                      {t("EnteryourNumber")}
                    </Text>
                    <Input
                      style={styles.subforminput}
                      value={values.type}
                      onChangeText={handleChange("type")}
                      onBlur={handleBlur("type")}
                    />
                  </View>
                  <View style={styles.subformcontainer}>
                    <Text style={styles.subformtitle}>Message</Text>
                    <Input
                      style={styles.subforminput}
                      value={values.repair}
                      onChangeText={handleChange("repair")}
                      onBlur={handleBlur("repair")}
                    />
                  </View>

                  <View style={styles.subformcontainer}>
                    <Text style={styles.subformtitle}>
                      {t("Enteryouremail")}
                    </Text>
                    <Input
                      style={styles.subforminput}
                      value={values.contact}
                      onChangeText={handleChange("contact")}
                      onBlur={handleBlur("contact")}
                    />
                  </View>
                  <View style={styles.btn}>
                    <Button
                      titleStyle={styles.btntxt}
                      color="secondary"
                      onPress={() => navigation.navigate("Summary1")}
                      // onPress={handleSubmit}
                    >
                      {t("NextStep")}
                    </Button>
                  </View>
                  <View style={styles.previouscontainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                      <Text style={styles.previouscontainertxt}>
                        {t("PreviousStep")}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
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
    color: WhiteColor,
    width: width / 5,
    marginLeft: width / 3,
    fontSize: secSmallSize,
  },
  btntxt: {
    fontSize: secSmallSize / 1.3,
  },
  previouscontainer: {
    marginVertical: height / 35,
  },
  previouscontainertxt: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
  },
});
