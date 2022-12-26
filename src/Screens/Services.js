import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Header, Icon, Button } from "@rneui/themed";

import {
  TitleSize,
  height,
  width,
  secSmallSize,
  smallSize,
} from "../constants/Sized";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import { Animated } from "react-native";
import { useTranslation } from "react-i18next";
import Svg, { G, Path } from "react-native-svg";

const Services = ({ navigation }) => {
  const { t } = useTranslation();
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const SecondOpacity = useRef(new Animated.Value(0)).current;
  const ThirdOpacity = useRef(new Animated.Value(0)).current;
  const forthOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.stagger(500, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(SecondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(ThirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(forthOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.maintxt}>{t("services")}</Text>
      <Animated.View style={{ opacity: firstOpacity }}>
        <View style={styles.card}>
          <ImageBackground
            source={require("../img/gym.jpg")}
            style={styles.cardimg}
          >
            <View style={styles.cardtxtcontainer}>
              <Text style={styles.cardtxtcontainertxt}>
                {t("GymMembershipForm")}
              </Text>
              <View style={styles.cardtxtcontainer2}>
                <Button
                  color={WhiteColor}
                  titleStyle={{ color: BlackColor }}
                  onPress={() => navigation.navigate("Gym")}
                  buttonStyle={styles.btn}
                >
                  {t("ClickHere")}
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
      <Animated.View style={{ opacity: SecondOpacity }}>
        <View style={styles.card}>
          <ImageBackground
            source={require("../img/phonemaintain.jpg")}
            style={styles.cardimg}
          >
            <View style={styles.cardtxtcontainer}>
              <Text style={styles.cardtxtcontainertxt}>
                {t("PhoneMaintenanceForm")}
              </Text>
              <View style={styles.cardtxtcontainer2}>
                <Button
                  color={WhiteColor}
                  titleStyle={{ color: BlackColor }}
                  onPress={() => navigation.navigate("Phone")}
                  buttonStyle={styles.btn}
                >
                  {t("ClickHere")}
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>

      <Animated.View style={{ opacity: ThirdOpacity }}>
        <View style={styles.card}>
          <ImageBackground
            source={require("../img/courier.jpeg")}
            style={styles.cardimg}
          >
            <View style={styles.cardtxtcontainer}>
              <Text style={styles.cardtxtcontainertxt}>{t("courier")}</Text>
              <View style={styles.cardtxtcontainer2}>
                <Button
                  color={WhiteColor}
                  titleStyle={{ color: BlackColor }}
                  onPress={() => navigation.navigate("Courier")}
                  buttonStyle={styles.btn}
                >
                  {t("ClickHere")}
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
      <Animated.View style={{ opacity: forthOpacity }}>
        <View style={styles.card}>
          <ImageBackground
            source={require("../img/carwash.jpg")}
            style={styles.cardimg}
          >
            <View style={styles.cardtxtcontainer}>
              <Text style={styles.cardtxtcontainertxt}>{t("CarWashForm")}</Text>
              <View style={styles.cardtxtcontainer2}>
                <Button
                  color={WhiteColor}
                  titleStyle={{ color: BlackColor }}
                  onPress={() => navigation.navigate("CarWash")}
                  buttonStyle={styles.btn}
                >
                  {t("ClickHere")}
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  maintxt: {
    fontSize: TitleSize / 2,
    fontFamily: "Roboto_700Bold",
    color: BlackColor,
    marginVertical: width / 15,
    textAlign: "center",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: width / 9,
  },
  cardimg: {
    width: width / 1.1,
    height: width / 1.5,
  },
  cardtxtcontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0, 0.30)",
    width: "100%",
    height: "100%",
  },
  cardtxtcontainertxt: {
    fontSize: secSmallSize * 1.2,
    fontFamily: "Roboto_700Bold",
    color: WhiteColor,
    textTransform: "capitalize",
  },
  cardtxtcontainericon: {
    marginLeft: 5,
    marginTop: 5,
  },
  btn: {
    borderRadius: height / 50,
    marginTop: height / 35,
    padding: width / 40,
    fontFamily: "Roboto_500Medium",
  },
});
