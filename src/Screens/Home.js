import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useCallback, useRef } from "react";
import { Divider, Icon, Button, Card } from "@rneui/themed";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import {
  TitleSize,
  height,
  width,
  secSmallSize,
  smallSize,
} from "../constants/Sized";
import ImageCarousel from "../components/ImageCarousel";
import { useSelector, useDispatch } from "react-redux";
import { hidelogoutbanner } from "../features/auth/authSlice";
import { Overlay } from "react-native-elements";
import LottieView from "lottie-react-native";
import { useTranslation } from "react-i18next";

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const animation = useRef(null);
  const logoutbanner = useSelector((state) => state.auth.logoutbanner);
  const data = [
    {
      id: 0,
      uri: "https://images.unsplash.com/photo-1607326957431-29d25d2b386f",
      title: "Dahlia",
    }, // https://unsplash.com/photos/Jup6QMQdLnM
    {
      id: 1,
      uri: "https://images.unsplash.com/photo-1512238701577-f182d9ef8af7",
      title: "Sunflower",
    }, // https://unsplash.com/photos/oO62CP-g1EA
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1627522460108-215683bdc9f6",
      title: "Zinnia",
    }, // https://unsplash.com/photos/gKMmJEvcyA8
  ];

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: 20 }}
      source={require("../img/wb.jpg")}
    >
      <>
        {logoutbanner && (
          <>
            {/* start of modal */}
            <Overlay
              isVisible={logoutbanner}
              onBackdropPress={() => dispatch(hidelogoutbanner())}
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
                source={require("../../src/img/33886-check-okey-done.json")}
              />
              <Pressable style={styles.centerizedCol}>
                <Text>{t("Logout Successfully")}</Text>
              </Pressable>
            </Overlay>
            {/* end of modal */}
          </>
        )}
        <ScrollView>
          {/* //! just for testing */}
          {/* <Text>{t("hi")}</Text> */}
          <ImageCarousel data={data} />
          <View style={styles.titlecontainer}>
            <Text style={styles.titlecontainertxt}>{t("introtxt")}</Text>
            <View style={styles.btncontainer}>
              <Button
                onPress={() => navigation.navigate("Membership")}
                title={t("learnmore")}
                color={"warning"}
                buttonStyle={{ borderRadius: width / 20 }}
              />
            </View>
          </View>
          <View>
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Electronics")}
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
                    <Text style={styles.cardtxtcontainertxt}>
                      {t("shopnow")}
                    </Text>
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
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Services")}
            >
              <ImageBackground
                source={require("../img/services.jpg")}
                style={styles.cardimg}
              >
                <View style={styles.cardtxtcontainer}>
                  <Text style={styles.cardtxtcontainertxt}>
                    {t("services")}
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Caps")}
            >
              <ImageBackground
                source={require("../img/caps.jpg")}
                style={styles.cardimg}
              >
                <View style={styles.cardtxtcontainer}>
                  <Text style={styles.cardtxtcontainertxt}>{t("Caps")}</Text>
                </View>
              </ImageBackground>
            </Pressable>
            <Divider color={"black"} />
            {/* <View style={styles.minicardcontainermain}>
            <View style={styles.minicardcontainer}>
              <View style={styles.minicardleft}>
                <Icon1 style={styles.minicardlefticon} />
              </View>
              <View style={styles.minicardright}>
                <Text style={styles.minicardright1}>FREE SHIPPING</Text>
                <Text style={styles.minicardright2}>
                  From all orders over 250 AE{" "}
                </Text>
              </View>
            </View>
            <View style={styles.minicardcontainer}>
              <View style={styles.minicardleft}>
                <Icon2 style={styles.minicardlefticon} />
              </View>
              <View style={styles.minicardright}>
                <Text style={styles.minicardright1}>FREE RETURNS</Text>
                <Text style={styles.minicardright2}>
                  Return money within 30 days{" "}
                </Text>
              </View>
            </View>
            <View style={styles.minicardcontainer}>
              <View style={styles.minicardleft}>
                <Icon3 style={styles.minicardlefticon} />
              </View>
              <View style={styles.minicardright}>
                <Text style={styles.minicardright1}>SECURE SHOPPING</Text>
                <Text style={styles.minicardright2}>You're in safe hands</Text>
              </View>
            </View>
            <View style={styles.minicardcontainer}>
              <View style={styles.minicardleft}>
                <Icon4 style={styles.minicardlefticon} />
              </View>
              <View style={styles.minicardright}>
                <Text style={styles.minicardright1}>OVER 10,000 STYLES</Text>
                <Text style={styles.minicardright2}>
                  ( Spanning All Over the UAE ){" "}
                </Text>
              </View>
            </View>
          </View> */}
          </View>
        </ScrollView>
      </>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  titlecontainer: {
    marginVertical: width / 25,
  },
  titlecontainertxt: {
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    fontSize: TitleSize / 2,
    color: WhiteColor,
  },
  btncontainer: {
    marginHorizontal: width / 3,
    marginVertical: width / 30,
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
  cardtxtcontainer2: {
    display: "flex",
    flexDirection: "row",
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
  minicardcontainermain: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  minicardcontainer: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    width: width / 1.6,
    height: height / 7,
    marginVertical: width / 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  minicardright: {
    width: width / 2,
  },
  minicardlefticon: {
    width: 150,
  },
  minicardright1: {
    fontSize: secSmallSize,
    marginBottom: width / 50,
    fontFamily: "Roboto_700Bold",
  },
  minicardright2: {
    fontSize: smallSize,
    fontFamily: "Roboto_500Medium",
  },
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
