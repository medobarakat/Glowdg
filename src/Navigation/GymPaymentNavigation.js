import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import Gym from "../Screens/Services/Gym";
import Summary from "../Screens/Services/GymPayment/Summary";

const Stack = createNativeStackNavigator();

const GymPaymentNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="gym1">
      <Stack.Screen
        name="gym1"
        component={Gym}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Summary2"
        component={Summary}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default GymPaymentNavigation;
