import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { Header, Icon } from "@rneui/themed";
import {
  TitleSize,
  height,
  width,
  secSmallSize,
  smallSize,
} from "../constants/Sized";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";

const Electronics = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.maintxt}>Electronics & More</Text>
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
        onPress={() => navigation.navigate("Capsshop")}
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
