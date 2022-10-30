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
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import axios from "axios";
import { electrnoics_Api_Url } from "../../uitlties/ApiConstants"
const ElectorincShop = () => {
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
      .get(electrnoics_Api_Url, config)
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
    fetchingData()
    marginTop.value = withTiming(height / 20, {
      duration: 2000
    })

  }, [])
  return (
    <ScrollView style={{ flex: 1 }}>
      {
        loading ? (
          <>
            <ActivityIndicator size={"large"} />
          </>

        ) : (
          <>

            <Animated.View style={[styles.container, {

            }, rstyle]}>
              <Text style={styles.maintxt}>Electronics</Text>
              {myData.map((item) => (
                <View key={item.key}>
                  <ShoppingItem
                    name={item.title}
                    price={item.price}
                    type={item.categories}
                    image={item.featured_src}
                  />
                </View>
              ))}
              {/* {data.map((item) => (
                <View key={item.key}>
                  <ShoppingItem
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    type={item.type}
                  />
                </View>
              ))} */}


              <Divider />
              <View style={styles.lastcontainer}>
                <Text style={styles.lastcontainertxt}>
                  Showing {myData.length} Product
                </Text>
              </View>
            </Animated.View>

          </>
        )
      }
      {
        error && (
          <>
            {/* for error handling */}
            <View>
              {error === true && (
                <View style={styles.errmessage}>
                  <Text style={styles.errmessagetxt}>
                    {" "}
                    Check Your Connection retry again
                  </Text>
                </View>
              )}
            </View>
            {/* end of error handling */}
          </>
        )
      }

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
    paddingHorizontal: 5
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
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  errmessage: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  errmessagetxt: {
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
    color: "red",
    lineHeight: 25
  },
});
