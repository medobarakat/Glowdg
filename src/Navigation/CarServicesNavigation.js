import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import CarServices from "../Screens/Services/CarServices";
import Summary from "../Screens/Services/CarServices/Summary";
const Stack = createNativeStackNavigator();

const CarServicesNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="car1">
      <Stack.Screen
        name="car1"
        component={CarServices}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Summary3"
        component={Summary}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CarServicesNavigation;
