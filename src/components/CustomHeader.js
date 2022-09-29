import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Header, Icon } from "@rneui/themed";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TitleSize } from "../constants/Sized";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const CustomHeader = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
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
              <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
              <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
              <MenuItem disabled>Disabled item</MenuItem>
              <MenuDivider />
              <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
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
});
