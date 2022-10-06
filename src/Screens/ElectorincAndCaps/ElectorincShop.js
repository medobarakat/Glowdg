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

const ElectorincShop = () => {
  const data = [
    {
      id: 1,
      name: "product1",
      price: "10",
    },
    {
      id: 2,
      name: "product2",
      price: "20",
    },
    {
      id: 3,
      name: "product3",
      price: "30",
    },
    {
      id: 4,
      name: "product4",
      price: "40",
    },
    {
      id: 5,
      name: "product5",
      price: "50",
    },
    {
      id: 6,
      name: "product6",
      price: "60",
    },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.maintxt}>Electronics</Text>
        {data.map((item) => (
          <View key={item.key}>
            <ShoppingItem name={item.name} price={item.price} />
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

export default ElectorincShop;

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
