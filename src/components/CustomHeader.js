import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Header, Icon } from "@rneui/themed";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TitleSize } from "../constants/Sized";

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Header
        backgroundColor={PrimaryColor}
        leftComponent={
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={
          <View style={styles.titlecontainer}>
            <Text style={styles.titletxt}>GLOWDG</Text>
          </View>
        }
        rightComponent={
          <View>
            <TouchableOpacity>
              <Icon name="person" color="white" />
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  titletxt: {
    fontSize: TitleSize / 2.5,
    fontWeight: "700",
    color: WhiteColor,
  },
});
