import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// the screens
import Home from "../Screens/Home";
import Whoarewe from "../Screens/Whoarewe";
import Services from "../Screens/Services";
import Electronics from "../Screens/Electronics";
import Caps from "../Screens/Caps";
import Bussiness from "../Screens/Bussiness";
import Membership from "../Screens/Membership";
import Contactus from "../Screens/Contactus";
import Faqs from "../Screens/Faqs";
const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="whoarewe" component={Whoarewe} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Electronics" component={Electronics} />
      <Drawer.Screen name="Caps" component={Caps} />
      <Drawer.Screen name="Bussiness" component={Bussiness} />
      <Drawer.Screen name="Membership" component={Membership} />
      <Drawer.Screen name="Contactus" component={Contactus} />
      <Drawer.Screen name="Faqs" component={Faqs} />
    </Drawer.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
