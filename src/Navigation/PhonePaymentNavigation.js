import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import Phone from "../Screens/Services/Phone";
import PhoneFinalCost from "../Screens/Services/PhonePayment/PhoneFinalCost";

const Stack = createNativeStackNavigator();

const PhonePaymentNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Phone1">
      <Stack.Screen
        name="Phone1"
        component={Phone}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhoneFinalCost"
        component={PhoneFinalCost}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PhonePaymentNavigation;
