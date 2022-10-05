import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import CarWash from "../Screens/Services/CarWash";
import Summary from "../Screens/Services/CarWash/Summary";

const Stack = createNativeStackNavigator();

const CarWashNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="CarWash1">
      <Stack.Screen
        name="CarWash1"
        component={CarWash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Summary4"
        component={Summary}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CarWashNavigation;
