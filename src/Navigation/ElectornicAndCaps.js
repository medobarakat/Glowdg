import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WhiteColor } from "../constants/Colors";
// the screens
import Electronics from "../Screens/Electronics";
import ElectorincShop from "../Screens/ElectorincAndCaps/ElectorincShop";
import CapsShop from "../Screens/ElectorincAndCaps/CapsShop";

const Stack = createNativeStackNavigator();

const ElectornicAndCaps = () => {
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
        component={CapsShop}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ElectornicAndCaps;
