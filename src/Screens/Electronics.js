import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Header, Icon } from "@rneui/themed";
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

const Electronics = ({ navigation }) => {
  const { t } = useTranslation();
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
    ]).start();
  }, []);
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const SecondOpacity = useRef(new Animated.Value(0)).current;
  const ThirdOpacity = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView style={{ flex: 1 }}>
      <Animated.View style={{ opacity: firstOpacity }}>
        <Text style={styles.maintxt}>{t("electronicsandmore")}</Text>
      </Animated.View>
      <Animated.View style={{ opacity: SecondOpacity }}>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("Electronicsshop")}
        >
          <ImageBackground
            source={require("../img/electornics.jpg")}
            style={styles.cardimg}
          >
            <View style={styles.cardtxtcontainer}>
              <Text style={styles.cardtxtcontainertxt}>
                {t("electronicsandmore")}
              </Text>
              <View style={styles.cardtxtcontainer2}>
                <Text style={styles.cardtxtcontainertxt}>{t("shopnow")}</Text>
                <Icon
                  style={styles.cardtxtcontainericon}
                  name="arrow-right-alt"
                  type="MaterialIcons"
                  color={"black"}
                />
              </View>
            </View>
          </ImageBackground>
        </Pressable>
      </Animated.View>
      <Animated.View style={{ opacity: ThirdOpacity }}>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("Capsshop")}
        >
          <ImageBackground
            source={require("../img/caps.jpg")}
            style={styles.cardimg}
          >
            <View style={styles.cardtxtcontainer}>
              <Text style={styles.cardtxtcontainertxt}>{t("caps")}</Text>
            </View>
          </ImageBackground>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
};

export default Electronics;

const styles = StyleSheet.create({
  maintxt: {
    fontSize: TitleSize / 2,
    fontFamily: "Roboto_700Bold",
    color: BlackColor,
    marginVertical: width / 25,
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
});
