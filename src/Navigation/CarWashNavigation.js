import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import CarWash from "../Screens/Services/CarWash";
import Summary from "../Screens/Services/CarWash/Summary";
import CarWashForm from "../Screens/Services/CarWash/CarWashForm";
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
        name="CarWashForm"
        component={CarWashForm}
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
