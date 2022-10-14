import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// the screens
import Login from "../Screens/Auth/Login";
import Signup from "../Screens/Auth/Signup";

const Drawer = createDrawerNavigator();

const LoginNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Login1"
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Login1" component={Login} />
            <Drawer.Screen name="Signup" component={Signup} />
        </Drawer.Navigator>
    );
};

export default LoginNavigation;

