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
import { Header, Icon } from "@rneui/themed";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import {
  TitleSize,
  height,
  width,
  secSmallSize,
  smallSize,
} from "../constants/Sized";
import ImageCarousel from "../components/ImageCarousel";
const renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        backgroundColor: "floralwhite",
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};

const Home = ({ navigation }) => {
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
      <ScrollView>
        <ImageCarousel data={data} />
        <View style={styles.titlecontainer}>
          <Text style={styles.titlecontainertxt}>
            Welcome to GLOWDG Family , Want to become GLOWDG member ?
          </Text>
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
                  electronics and more !
                </Text>
                <View style={styles.cardtxtcontainer2}>
                  <Text style={styles.cardtxtcontainertxt}>shop now</Text>
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
                <Text style={styles.cardtxtcontainertxt}>services</Text>
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
                <Text style={styles.cardtxtcontainertxt}>Caps !</Text>
              </View>
            </ImageBackground>
          </Pressable>
        </View>
      </ScrollView>
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
});
