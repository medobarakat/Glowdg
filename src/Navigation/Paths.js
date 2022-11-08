import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import HomeNavigation from "../Navigation/HomeNavigation";
// auth screen
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();
const Renderpages = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeNavigation} />
      </Stack.Navigator>
    </>
  );
};

function Paths() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  });
  return (
    <NavigationContainer>
      <Renderpages />
    </NavigationContainer>
  );
}

export default Paths;

const styles = StyleSheet.create({});
