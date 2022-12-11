import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../constants/Sized";
import { useTranslation } from "react-i18next";

const Whoarewe = () => {
  const { t } = useTranslation();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>{t("AboutUs")}</Text>
        <Image source={require("../img/whoweare.jpeg")} style={styles.img} />
        <View style={styles.txtContainer}>
          <Text style={styles.txt1}>OUR STORY</Text>
          <Text style={styles.txt2}>
            Providing easy , fast and innovative retail and services experience
            to the UAE community
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Whoarewe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: height / 20,
  },
  maintxt: {
    fontSize: TitleSize / 2,
    fontFamily: "Roboto_700Bold",
    color: BlackColor,
  },
  img: {
    width: width / 1.2,
    height: height / 2,
    marginTop: height / 15,
  },
  txtContainer: {
    marginHorizontal: width / 10,
    marginTop: height / 55,
  },
  txt1: {
    marginBottom: height / 55,
    fontSize: secSmallSize / 1.2,
    fontFamily: "Roboto_500Medium",
    color: "#777",
  },
  txt2: {
    marginLeft: width / 20,
    marginHorizontal: height / 50,
    fontFamily: "Roboto_500Medium",
    fontSize: secSmallSize,
    lineHeight: height / 25,
  },
});
