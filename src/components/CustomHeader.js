import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Header, Icon } from "@rneui/themed";
import { PrimaryColor, BlackColor, WhiteColor } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { height, TitleSize, width } from "../constants/Sized";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { useSelector, useDispatch } from "react-redux";
import { handlelogOut } from "../features/auth/authSlice";
import { useTranslation } from "react-i18next";
import EnPic from "../img/en.png";
import ArPic from "../img/ar.png";

const CustomHeader = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const IsGuest = useSelector((state) => state.auth.IsGuest);
  const data = useSelector((state) => state.auth.data);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const navigateto = (name) => {
    navigation.navigate(name);
    hideMenu();
  };
  const navigatelogin = () => {
    navigation.navigate("Login");
    hideMenu();
  };

  const logouthandler = () => {
    dispatch(handlelogOut());
    hideMenu();
    navigation.navigate("home1");
  };

  const langhandler = () => {
    console.warn(i18n.language);
  };

  const switchToAr = () => {
    i18n.changeLanguage("ar");
  };
  const switchToEn = () => {
    i18n.changeLanguage("en");
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
              <MenuItem onPress={langhandler}>
                {i18n.language === "ar" ? (
                  <TouchableOpacity onPress={switchToEn}>
                    <View style={styles.logoContainer}>
                      <Text style={styles.logotxt}>To En</Text>
                      <Image
                        source={EnPic}
                        style={styles.langlogo}
                        width={10}
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={switchToAr}>
                    <View style={styles.logoContainer}>
                      <Text style={styles.logotxt}>To Ar</Text>
                      <Image
                        source={ArPic}
                        style={styles.langlogo}
                        width={10}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </MenuItem>
              {IsGuest ? (
                <>
                  <View style={styles.usercontainer}>
                    <Text style={styles.usercontainertxt}>
                      {t("welcomeguest")}
                    </Text>
                  </View>

                  <MenuDivider />
                  <MenuItem onPress={navigatelogin}>{t("LogIn")}</MenuItem>
                  <MenuDivider />
                </>
              ) : (
                <>
                  <View style={styles.usercontainer}>
                    <Text style={styles.usercontainertxt}>
                      {t("Welcome")} {data.data.display_name}
                    </Text>
                  </View>

                  <MenuDivider />
                  <MenuItem onPress={() => navigateto("Settings")}>
                    {t("Settings")}
                  </MenuItem>
                  <MenuItem onPress={logouthandler}>Log Out</MenuItem>
                  <MenuDivider />
                </>
              )}
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
  logoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logotxt: {
    fontFamily: "Roboto_400Regular",
  },
  langlogo: {
    width: 20,
    height: 20,
    marginLeft: width / 50,
  },
  usercontainertxt: {
    fontFamily: "Roboto_400Regular",
  },
});
