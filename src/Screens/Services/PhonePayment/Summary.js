import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import { Divider, Input, Button } from "@rneui/themed";
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
import { Overlay } from "react-native-elements";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Summary = ({ navigation }) => {
  const { t } = useTranslation();
  const animation = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const IsGuest = useSelector((state) => state.auth.IsGuest);
  const orderhandler = () => {
    if (IsGuest) {
      setShowModal(true);
    } else {
      console.warn(t("success"));
    }
  };
  return (
    <View style={styles.container}>
      {IsGuest && (
        <>
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
              source={require("../../../img/74164-warning.json")}
            />
            <Pressable style={styles.centerizedCol}>
              <Text>{t("LoginPleaseToConfirmOrder")}</Text>
            </Pressable>
          </Overlay>
          {/* end of modal */}
        </>
      )}
      <View>
        <Text style={styles.subformmaintxt1}>{t("Summary")}</Text>
        <View style={styles.subformmaincontainer}>
          <View style={styles.subformmain}>
            <Text style={styles.subformmaintxt}>{t("silverstartadress")}</Text>
          </View>
          <View style={styles.subformmain}>
            <Text style={styles.subformmaintxt}>{t("Quantitiy")} 1</Text>
          </View>
          <View style={styles.subformmain}>
            <Text style={styles.subformmaintxt}>200.00 {t("Dirham")}</Text>
          </View>
        </View>
        <View style={styles.subformmainlast}>
          <Text style={styles.subformmainlasttxt1}>{t("Total")} :</Text>
          <Text style={styles.subformmainlasttxt2}>200.00 {t("Dirham")}</Text>
        </View>
        <View style={styles.btn}>
          <Button
            color="secondary"
            // onPress={() => navigation.navigate("Summary1")}
            // onPress={handleSubmit}
            onPress={orderhandler}
          >
            {t("Order")}
          </Button>
        </View>
        <View style={styles.previouscontainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.previouscontainertxt}>{t("PreviousStep")}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: PrimaryColor,
  },
  subformmaincontainer: {
    width: width / 1.2,
    marginTop: height / 15,
    position: "relative",
    borderWidth: 1,
    borderColor: BlackColor,
    backgroundColor: WhiteColor,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subformmain: {
    marginVertical: height / 25,
  },
  subformmaintxt1: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
    marginTop: height / 20,
  },
  subformmaintxt: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
  subformmainlast: {
    marginVertical: height / 30,
  },
  subformmainlasttxt1: {
    textAlign: "center",
    fontFamily: "Roboto_700Bold",
  },
  subformmainlasttxt2: {
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    color: "green",
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
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
