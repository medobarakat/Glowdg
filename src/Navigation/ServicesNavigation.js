import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import Services from "../Screens/Services";
import CarServices from "../Screens/Services/CarServices";
import CarWash from "../Screens/Services/CarWash";
import Gym from "../Screens/Services/Gym";
import Phone from "../Screens/Services/Phone";

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
        component={CarServices}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gym"
        component={Gym}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CarWash"
        component={CarWash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Phone"
        component={Phone}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ServicesNavigation;
