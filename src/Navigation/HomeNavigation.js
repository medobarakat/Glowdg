import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// the screens
import Home from "../Screens/Home";
import Whoarewe from "../Screens/Whoarewe";
import Services from "../Screens/Services";
// import Electronics from "../Screens/Electronics";
import ElectornicAndCaps from "./ElectornicAndCaps";
import Caps from "../Screens/Caps";
import Bussiness from "../Screens/Bussiness";
import Membership from "../Screens/Membership";
import Contactus from "../Screens/Contactus";
import Faqs from "../Screens/Faqs";
import CustomDrawer from "../components/CustomDrawer";
// importing login screen
import Login from "../Screens/Auth/Login";
import CustomHeader from "../components/CustomHeader";
const Drawer = createDrawerNavigator();

const HomeNavigation = ({ Navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{ header: () => <CustomHeader /> }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="whoarewe"
        component={Whoarewe}
        options={{
          title: "Who We Are",
        }}
      />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen
        name="Electronics"
        component={ElectornicAndCaps}
        options={{
          title: "Electronics & More",
        }}
      />
      <Drawer.Screen
        name="Caps"
        component={Caps}
        options={{
          title: "CAPS BY GLOWDG",
        }}
      />
      <Drawer.Screen
        name="Bussiness"
        component={Bussiness}
        options={{
          title: "Business Inquiries",
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={Membership}
        options={{
          title: "GLOWDG membership",
        }}
      />
      <Drawer.Screen name="Contactus" component={Contactus} />
      <Drawer.Screen name="Faqs" component={Faqs} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
