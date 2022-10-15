import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import { Divider, Input, Button } from "@rneui/themed";
import {
  PrimaryColor,
  BlackColor,
  WhiteColor,
} from "../../../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../../../constants/Sized";
import { Overlay } from "react-native-elements";
import LottieView from 'lottie-react-native';
import { useSelector } from "react-redux";

const Summary = ({ navigation }) => {
  const animation = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const IsGuest = useSelector((state) => state.auth.IsGuest);
  const orderhandler = () => {
    if (IsGuest) {
      setShowModal(true)
    } else {
      console.warn("success")
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subformmaintxt1}>Summary</Text>
        <View style={styles.subformmaincontainer}>
          <View style={styles.subformmain}>
            <Text style={styles.subformmaintxt}>
              Silver star - Hamdan Street , Abu Dhabi
            </Text>
          </View>
          <View style={styles.subformmain}>
            <Text style={styles.subformmaintxt}>Quantitiy 1</Text>
          </View>
          <View style={styles.subformmain}>
            <Text style={styles.subformmaintxt}>200.00 Dirham</Text>
          </View>
        </View>
        <View style={styles.subformmainlast}>
          <Text style={styles.subformmainlasttxt1}>Total :</Text>
          <Text style={styles.subformmainlasttxt2}>200.00 Dirham</Text>
        </View>
        <View style={styles.btn}>
          <Button
            color="secondary"
            // onPress={() => navigation.navigate("Summary1")}
            // onPress={handleSubmit}
            onPress={orderhandler}
          >
            Order
          </Button>
        </View>
        <View style={styles.previouscontainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.previouscontainertxt}>Previous Step</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: PrimaryColor,
  },
  subformmaincontainer: {
    width: width / 1.2,
    marginTop: height / 15,
    position: "relative",
    borderWidth: 1,
    borderColor: BlackColor,
    backgroundColor: WhiteColor,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subformmain: {
    marginVertical: height / 25,
  },
  subformmaintxt1: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
    marginTop: height / 20,
  },
  subformmaintxt: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
  subformmainlast: {
    marginVertical: height / 30,
  },
  subformmainlasttxt1: {
    textAlign: "center",
    fontFamily: "Roboto_700Bold",
  },
  subformmainlasttxt2: {
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    color: "green",
  },
  btn: {
    backgroundColor: BlackColor,
    width: width / 5,
    marginLeft: width / 3,
    fontSize: secSmallSize,
  },
  previouscontainer: {
    marginVertical: height / 35,
  },
  previouscontainertxt: {
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
  },
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
