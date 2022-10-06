import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import Electronics from "../Screens/Electronics";
import ElectorincShop from "../Screens/ElectorincAndCaps/ElectorincShop";
import CapsProductNavigation from "./CapsProductsNavigation";
// import CapsShop from "../Screens/ElectorincAndCaps/CapsShop";

const Stack = createNativeStackNavigator();

const ElectornicAndCapsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Electronics1">
      <Stack.Screen
        name="Electronics1"
        component={Electronics}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Electronicsshop"
        component={ElectorincShop}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Capsshop"
        component={CapsProductNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ElectornicAndCapsNavigation;
