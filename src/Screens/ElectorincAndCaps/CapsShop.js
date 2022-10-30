import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { Caps_Api_Url } from "../../uitlties/ApiConstants"
const CapsShop = () => {
  const [loading, setLoading] = useState(false)
  const [myData, setMyData] = useState([])
  const [error, setError] = useState(false);
  const fetchingData = async () => {
    setLoading(true)
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    axios
      .get(Caps_Api_Url, config)
      .then((res) => {
        console.log(res.data.products);
        setMyData(res.data.products)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setError(true)
      });
  };
  useEffect(() => {
    fetchingData()
  }, [])




  // const data = [
  //   {
  //     id: 1,
  //     name: "Caps Product1",
  //     price: "10",
  //     image: require("../../img/caps.jpg"),
  //     type: "caps",
  //   },
  //   {
  //     id: 2,
  //     name: "Caps Product2",
  //     price: "20",
  //     image: require("../../img/caps.jpg"),
  //     type: "caps",
  //   },
  //   {
  //     id: 3,
  //     name: "Caps Product3",
  //     price: "30",
  //     image: require("../../img/caps.jpg"),
  //     type: "caps",
  //   },
  //   {
  //     id: 4,
  //     name: "Caps Product4",
  //     price: "40",
  //     image: require("../../img/caps.jpg"),
  //     type: "caps",
  //   },
  //   {
  //     id: 5,
  //     name: "Caps Product5",
  //     price: "50",
  //     image: require("../../img/caps.jpg"),
  //     type: "caps",
  //   },
  //   {
  //     id: 6,
  //     name: "Caps Product6",
  //     price: "60",
  //     image: require("../../img/caps.jpg"),
  //     type: "caps",
  //   },
  // ];
  return (
    <ScrollView style={{ flex: 1 }}>
      {
        loading ? (
          <>
            <ActivityIndicator size={"large"} />

          </>
        ) : (
          <>
            <View style={styles.container}>
              <Text style={styles.maintxt}>Caps</Text>
              {myData.map((item) => (
                <View key={item.id}>
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
                  Showing {myData.length} Product
                </Text>
              </View>
            </View>
          </>
        )
      }

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
