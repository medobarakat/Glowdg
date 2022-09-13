import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import Login from "../Screens/Auth/Login";
import Home from "../Screens/Home";

import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
// if user logged
const Renderpages = () => {
  const IsUser = useSelector((state) => state.auth.IsUser);
  return (
    <>
      {IsUser && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={home} />
        </Stack.Navigator>
      )}
    </>
  );
};
// if no user logged (guest)

const Renderpages2 = () => {
  const IsGuest = useSelector((state) => state.auth.IsGuest);

  return (
    <>
      {IsGuest ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </>
  );
};

function Paths() {
  const IsLogged = useSelector((state) => state.auth.IsLogged);

  return (
    <NavigationContainer>
      {IsLogged ? <Renderpages /> : <Renderpages2 />}
    </NavigationContainer>
  );
}

export default Paths;

const styles = StyleSheet.create({});
