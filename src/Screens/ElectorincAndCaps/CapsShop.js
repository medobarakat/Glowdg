import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { PrimaryColor, BlackColor, WhiteColor } from "../../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../../constants/Sized";
import ShoppingItem from "../../components/ShoppingItem";
import { Divider } from "@rneui/base";

const CapsShop = () => {
  const data = [
    {
      id: 1,
      name: "Caps Product1",
      price: "10",
      image: require("../../img/caps.jpg"),
      type: "caps",
    },
    {
      id: 2,
      name: "Caps Product2",
      price: "20",
      image: require("../../img/caps.jpg"),
      type: "caps",
    },
    {
      id: 3,
      name: "Caps Product3",
      price: "30",
      image: require("../../img/caps.jpg"),
      type: "caps",
    },
    {
      id: 4,
      name: "Caps Product4",
      price: "40",
      image: require("../../img/caps.jpg"),
      type: "caps",
    },
    {
      id: 5,
      name: "Caps Product5",
      price: "50",
      image: require("../../img/caps.jpg"),
      type: "caps",
    },
    {
      id: 6,
      name: "Caps Product6",
      price: "60",
      image: require("../../img/caps.jpg"),
      type: "caps",
    },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>Caps</Text>
        {data.map((item) => (
          <View key={item.key}>
            <ShoppingItem
              name={item.name}
              price={item.price}
              image={item.image}
              type={item.type}
            />
          </View>
        ))}
        <Divider />
        <View style={styles.lastcontainer}>
          <Text style={styles.lastcontainertxt}>
            Showing {data.length} Product
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CapsShop;

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
    marginBottom: height / 50,
    borderBottomColor: BlackColor,
    borderBottomWidth: 2,
  },
  lastcontainer: {
    borderTopColor: BlackColor,
    borderTopWidth: 2,
    width: width / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  lastcontainertxt: {
    fontFamily: "Roboto_500Medium",
  },
});
