import { createStackNavigator } from "@react-navigation/stack";
import { Login, SignUp } from "../screens/index";
import React from "react";

export default function AuthNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="Login" component={Login} 
      options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="SignUp" component={SignUp}
      options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  );
}