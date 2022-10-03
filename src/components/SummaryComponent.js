import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../constants/Sized";
import { Divider, Input, Button } from "@rneui/themed";

const SummaryComponent = ({ navigation, name }) => {
  // const { name } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={styles.container}>
        {name === "phone" && (
          <View>
            <View style={styles.subformmaincontainer}>
              <View style={styles.subformmain}>
                <Text style={styles.subformmaintxt}>Select Gym</Text>
              </View>
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
        )}
      </View>
    </ScrollView>
  );
};

export default SummaryComponent;

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
  subformmaintxt: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
  subformmainlast: {
    marginTop: height / 20,
  },
  subformmainlasttxt1: {
    fontFamily: "Roboto_700Bold",
  },
  subformmainlasttxt2: {
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
});
