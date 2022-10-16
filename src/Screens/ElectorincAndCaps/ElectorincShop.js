import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
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
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const ElectorincShop = () => {
  const data = [
    {
      id: 1,
      name: "Electronics Product1",
      price: "10",
      image: require("../../img/caps.jpg"),
      type: "Electronics",
    },
    {
      id: 2,
      name: "Electronics Product2",
      price: "20",
      image: require("../../img/caps.jpg"),
      type: "Electronics",
    },
    {
      id: 3,
      name: "Electronics Product3",
      price: "30",
      image: require("../../img/caps.jpg"),
      type: "Electronics",
    },
    {
      id: 4,
      name: "Electronics Product4",
      price: "40",
      image: require("../../img/caps.jpg"),
      type: "Electronics",
    },
    {
      id: 5,
      name: "Electronics Product5",
      price: "50",
      image: require("../../img/caps.jpg"),
      type: "Electronics",
    },
    {
      id: 6,
      name: "Electronics Product6",
      price: "60",
      image: require("../../img/caps.jpg"),
      type: "Electronics",
    },
  ];
  const marginTop = useSharedValue(0)

  const rstyle = useAnimatedStyle(() => {
    return {
      marginTop: marginTop.value,
    }
  })
  useEffect(() => {
    marginTop.value = withTiming(height / 20, {
      duration: 2000
    })
  }, [])
  return (
    <ScrollView style={{ flex: 1 }}>
      <Animated.View style={[styles.container, {

      }, rstyle]}>
        <Text style={styles.maintxt}>Electronics</Text>
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
      </Animated.View>
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
    marginTop: height,
    // translateY: 100
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
