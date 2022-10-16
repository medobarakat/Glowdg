import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
// import CapsShop from "../Screens/ElectorincAndCaps/CapsShop";
import ElectorincShop from "../Screens/ElectorincAndCaps/ElectorincShop";
import ProductDetail from "../components/ProductDetail";
const Stack = createNativeStackNavigator();

const ElectornicsProductsNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="electronic2">
            <Stack.Screen
                name="electronic2"
                component={ElectorincShop}
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

export default ElectornicsProductsNavigation;
