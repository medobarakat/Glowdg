import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { height, smallSize, width, secSmallSize } from "../constants/Sized";
import { useNavigation } from "@react-navigation/native";
import { BlackColor } from "../constants/Colors";
const ShoppingItem = ({ name, price, image, type }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("ProductDetail1", {
          name,
          price,
          image,
          type,
        })
      }
    >
      <View style={styles.imgcontainer}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.txt1}>{name}</Text>
        <Text style={styles.txt2}>د.ا {price}</Text>
      </View>
    </Pressable>
  );
};

export default ShoppingItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: width / 50,
    borderColor: BlackColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
    width: width / 1.2
  },
  imgcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: height / 20
  },
  img: {
    width: width / 2,
    height: height / 3,
  },
  container2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  txt1: {
    marginVertical: height / 80,
    fontSize: secSmallSize,
    fontFamily: "Roboto_700Bold",
  },
  txt2: {
    marginVertical: height / 80,
    fontSize: smallSize,
    fontFamily: "Roboto_500Medium",
    color: "#777",
  },
});
