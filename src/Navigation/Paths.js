import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// the screens
import HomeNavigation from "../Navigation/HomeNavigation";
// auth screen
import Login from "../Screens/Auth/Login";
import Signup from "../Screens/Auth/Signup";
import { LogBox } from 'react-native';

// import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
// if user logged
const Renderpages = () => {
  // const IsUser = useSelector((state) => state.auth.IsUser);
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeNavigation} />
      </Stack.Navigator>
    </>
  );
};
// // if no user logged (guest)

// const Renderpages2 = () => {
//   const IsGuest = useSelector((state) => state.auth.IsGuest);

//   return (
//     <>
//       {IsGuest ? (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="home" component={Home} />
//         </Stack.Navigator>
//       ) : (
//         //! Here if logged
//         <Stack.Navigator
//           initialRouteName="Login"
//           screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="signup" component={Signup} />
//           <Stack.Screen name="home1" component={HomeNavigation} />
//         </Stack.Navigator>
//       )}
//     </>
//   );
// };

function Paths() {
  // const IsLogged = useSelector((state) => state.auth.IsLogged);
  useEffect(() => {
    LogBox.ignoreAllLogs()
  })
  return (
    <NavigationContainer>
      {/* {IsLogged ? <Renderpages /> : <Renderpages2 />} */}
      <Renderpages />
    </NavigationContainer>
  );
}

export default Paths;

const styles = StyleSheet.create({});
