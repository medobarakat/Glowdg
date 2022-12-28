import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useRef } from "react";
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
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Api_url } from "../../../uitlties/ApiConstants";
import { Overlay } from "react-native-elements";
import LottieView from "lottie-react-native";
const CarWashForm = ({ navigation, route }) => {
  const { value } = route.params;
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState("");
  const [error, setError] = useState("");
  //?   change the prices here
  const saloonPrice = 35;
  const the4x4Price = 55;
  const HandleSubmitFromFormik = (qty, number, email) => {
    setShowModal(false);
    if (value == 1) {
      const price = qty * saloonPrice;
      const url =
        Api_url +
        `?carwash=yes&salon=1&salooncleaning=${saloonPrice}&saloonqty=${qty}&cnmb=${number}&custemail=${email}`;
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
        .finally((res) => {
          navigation.navigate("Summary4", {
            qty: qty,
            price: price,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const price = qty * the4x4Price;

      const url =
        Api_url +
        `?carwash=yes&4by4=1&4x4cleaning=${the4x4Price}&4x4qty=${qty}&cnmb=${number}&custemail=${email}`;
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
        .finally((res) => {
          navigation.navigate("Summary4", {
            qty: qty,
            price: price,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>
          {t("CarWashForm")}
          {/* {JSON.stringify(value)} */}
        </Text>
        <Formik
          initialValues={{
            qty: "",
            Number: "",
            email: "",
          }}
          onSubmit={(values) => {
            if (values.qty && values.Number && values.email) {
              HandleSubmitFromFormik(values.qty, values.Number, values.email);
            } else {
              setError("Complete The Form Please");
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={styles.subformmaincontainer}>
                {/* <Text style={styles.subformmaincontainertitle}>
                  {t("courier")}
                </Text> */}
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("cleaning")}</Text>
                  <Text style={styles.subformtitle2}>
                    {value == 1 ? "Sedan car" : "4x4 Car"}{" "}
                    {value == 1 ? saloonPrice : the4x4Price}
                  </Text>
                </View>

                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("Quantitiy")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.qty}
                    onChangeText={handleChange("qty")}
                    onBlur={handleBlur("qty")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("number2")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.Number}
                    onChangeText={handleChange("Number")}
                    onBlur={handleBlur("Number")}
                  />
                </View>
                <View style={styles.subformcontainer}>
                  <Text style={styles.subformtitle}>{t("youremail")}</Text>
                  <Input
                    style={styles.subforminput}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
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
                    //onPress={() => console.warn(value)}
                    onPress={handleSubmit}
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

export default CarWashForm;

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
  subformtitle2: {
    marginTop: height / 30,
    textAlign: "center",
    fontSize: secSmallSize,
    fontFamily: "Roboto_500Medium",
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
