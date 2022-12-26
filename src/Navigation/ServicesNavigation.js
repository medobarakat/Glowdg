import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import Services from "../Screens/Services";
import CarServicesNavigation from "./CarServicesNavigation";
// import CarServices from "../Screens/Services/CarServices";
import CarWashNavigation from "./CarWashNavigation";

import CarWash from "../Screens/Services/CarWash";
import GymPaymentNavigation from "./GymPaymentNavigation";
// import Gym from "../Screens/Services/Gym";
import PhonePaymentNavigation from "./PhonePaymentNavigation";
// import Phone from "../Screens/Services/Phone";
import Courier from "../Screens/Services/Courier";

const Stack = createNativeStackNavigator();

const ServicesNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Services1">
      <Stack.Screen
        name="Services1"
        component={Services}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CarServices"
        component={CarServicesNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gym"
        component={GymPaymentNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CarWash"
        component={CarWashNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Phone"
        component={PhonePaymentNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Courier"
        component={Courier}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ServicesNavigation;
