import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  Linking,
  TouchableOpacity,
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
import Svg, { G, Path } from "react-native-svg";

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const animation = useRef(null);
  const logoutbanner = useSelector((state) => state.auth.logoutbanner);
  const number = "+971507410693";
  const message = "Hello GlowDg I Want To make An Order";
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      console.warn("error try again please");
    }
  };

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
        <TouchableOpacity
          style={styles.whatsappicon}
          onPress={() => {
            Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`);
          }}
        >
          <Svg
            width="60px"
            height="60px"
            viewBox="-0.348 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <G>
              <Path
                d="M15.676 51.387L16.645 51.872C20.686 54.298 25.21 55.428 29.733 55.428L29.733 55.428C43.955 55.428 55.59 43.793 55.59 29.573C55.59 22.786 52.842 16.161 47.995 11.312C43.145 6.466 36.682 3.718 29.733 3.718C15.512 3.718 3.877 15.353 4.04 29.733C4.04 34.582 5.494 39.267 7.918 43.308L8.566 44.278L5.979 53.813L15.676 51.387Z"
                fill="#00E676"
              />
              <Path
                d="M50.742 8.725C45.247 3.07 37.653 0 29.896 0C13.412 0 0.162 13.412 0.323 29.733C0.323 34.906 1.778 39.915 4.202 44.44L0 59.79L15.676 55.75C20.038 58.175 24.886 59.306 29.733 59.306L29.733 59.306C46.055 59.306 59.306 45.893 59.306 29.573C59.306 21.655 56.235 14.22 50.742 8.725ZM29.896 54.298L29.896 54.298C25.533 54.298 21.17 53.165 17.453 50.902L16.482 50.418L7.11 52.842L9.535 43.63L8.887 42.662C1.778 31.188 5.17 15.997 16.805 8.887C28.44 1.778 43.47 5.17 50.58 16.805C57.69 28.44 54.298 43.47 42.662 50.58C38.945 53.003 34.42 54.298 29.896 54.298ZM44.115 36.36L42.337 35.55C42.337 35.55 39.753 34.42 38.137 33.612C37.975 33.612 37.812 33.45 37.653 33.45C37.167 33.45 36.845 33.612 36.52 33.773L36.52 33.773C36.52 33.773 36.36 33.935 34.098 36.52C33.935 36.845 33.612 37.006 33.29 37.006L33.127 37.006C32.965 37.006 32.642 36.845 32.48 36.682L31.673 36.36L31.673 36.36C29.896 35.55 28.28 34.582 26.988 33.29C26.663 32.965 26.178 32.642 25.855 32.32C24.725 31.188 23.592 29.896 22.786 28.44L22.622 28.118C22.463 27.955 22.463 27.796 22.299 27.473C22.299 27.147 22.299 26.825 22.463 26.663C22.463 26.663 23.107 25.855 23.592 25.37C23.918 25.047 24.078 24.563 24.399 24.24C24.725 23.755 24.886 23.107 24.725 22.622C24.563 21.814 22.622 17.453 22.138 16.482C21.814 15.997 21.492 15.838 21.007 15.676L20.522 15.676C20.199 15.676 19.714 15.676 19.23 15.676C18.907 15.676 18.582 15.838 18.261 15.838L18.1 15.997C17.776 16.161 17.453 16.482 17.13 16.645C16.805 16.968 16.645 17.29 16.32 17.614C15.19 19.068 14.542 20.845 14.542 22.622L14.542 22.622C14.542 23.918 14.868 25.21 15.353 26.34L15.512 26.825C16.968 29.896 18.907 32.642 21.492 35.067L22.138 35.712C22.622 36.198 23.107 36.52 23.433 37.006C26.825 39.915 30.702 42.015 35.067 43.145C35.55 43.308 36.198 43.308 36.682 43.47L36.682 43.47C37.167 43.47 37.812 43.47 38.298 43.47C39.108 43.47 40.075 43.145 40.722 42.822C41.208 42.501 41.53 42.501 41.853 42.178L42.178 41.853C42.501 41.53 42.822 41.367 43.145 41.045C43.47 40.722 43.793 40.401 43.955 40.075C44.278 39.43 44.44 38.622 44.601 37.812C44.601 37.49 44.601 37.006 44.601 36.682C44.601 36.682 44.44 36.52 44.115 36.36Z"
                fill="#FFFFFF"
              />
            </G>
          </Svg>
        </TouchableOpacity>
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
  whatsappicon: {
    position: "absolute",
    right: width / 20,
    bottom: height / 20,
    zIndex: 10,
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
