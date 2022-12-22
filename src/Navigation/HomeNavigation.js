import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// the screens
import Home from "../Screens/Home";
import Whoarewe from "../Screens/Whoarewe";
import ServicesNavigation from "./ServicesNavigation";
import Services from "../Screens/Services";
// import Electronics from "../Screens/Electronics";
import ElectornicAndCapsNavigation from "./ElectornicAndCapsNavigation";
import CapsProductsNavigation from "./CapsProductsNavigation";
// import Caps from "../Screens/Caps";
import Bussiness from "../Screens/Bussiness";
import Membership from "../Screens/Membership";
import Contactus from "../Screens/Contactus";
import FeedBack from "../Screens/FeedBack";
import Faqs from "../Screens/Faqs";
import CustomDrawer from "../components/CustomDrawer";
// importing login screen
import Settings from "../Screens/User/Settings";
// import Login from "../Screens/Auth/Login";
import LoginNavigation from "./LoginNavigation";
import CustomHeader from "../components/CustomHeader";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

const HomeNavigation = ({ Navigation }) => {
  const IsGuest = useSelector((state) => state.auth.IsGuest);
  return (
    <Drawer.Navigator
      initialRouteName="home1"
      screenOptions={{ header: () => <CustomHeader /> }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="home1"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="whoarewe"
        component={Whoarewe}
        options={{
          title: "About Us",
        }}
      />
      <Drawer.Screen name="Services" component={ServicesNavigation} />
      <Drawer.Screen
        name="Electronics"
        component={ElectornicAndCapsNavigation}
        options={{
          title: "Electronics & More",
        }}
      />
      <Drawer.Screen
        name="Caps"
        component={CapsProductsNavigation}
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
      <Drawer.Screen
        name="Contactus"
        component={Contactus}
        options={{
          title: "Contact Us",
        }}
      />
      <Drawer.Screen
        name="Feed Back"
        component={FeedBack}
        options={{
          title: "FeedBack",
        }}
      />
      {/* <Drawer.Screen name="Faqs" component={Faqs} /> */}
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      {IsGuest && (
        <Drawer.Screen
          name="Login"
          component={LoginNavigation}
          options={{ headerShown: false }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
