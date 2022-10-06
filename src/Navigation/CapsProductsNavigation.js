import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import CapsShop from "../Screens/ElectorincAndCaps/CapsShop";
import ProductDetail from "../components/ProductDetail";
const Stack = createNativeStackNavigator();

const CapsProductNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Caps2">
      <Stack.Screen
        name="Caps2"
        component={CapsShop}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail1"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CapsProductNavigation;
