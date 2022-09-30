import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Header, Icon } from "@rneui/themed";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { height, TitleSize, width } from "../constants/Sized";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const CustomHeader = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const navigateto = (name) => {
    navigation.navigate(name);
    hideMenu();
  };
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
            <Menu
              visible={visible}
              anchor={<Icon onPress={showMenu} name="person" color="white" />}
              onRequestClose={hideMenu}
            >
              <View style={styles.usercontainer}>
                <Text style={styles.usercontainertxt}>Welcome User</Text>
              </View>

              <MenuDivider />
              <MenuItem onPress={() => navigateto("Settings")}>
                Settings
              </MenuItem>
              <MenuItem onPress={hideMenu}>Log Out</MenuItem>
              <MenuDivider />
            </Menu>
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
  usercontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: width / 40,
  },
});
