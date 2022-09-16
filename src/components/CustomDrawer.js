import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { height, TitleSize, width } from "../constants/Sized";
import { PrimaryColor, WhiteColor, BlackColor } from "../constants/Colors";
const CustomDrawer = (props) => {
  return (
    <View style={styles.drawer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titletxt}>GlowDg</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  titlecontainer: {
    marginTop: height / 14,
    marginLeft: width / 5.5,
  },
  titletxt: {
    color: WhiteColor,
    fontSize: TitleSize / 1.5,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  drawer: {
    backgroundColor: PrimaryColor,
    flex: 1,
  },
  itemlist: {
    color: WhiteColor,
  },
});
