import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, Singup } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  // styled component에서 제공하는 ThemeContext, useContext Hook 함수
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerTitleAlign: "center", // 안드로이드, iOS 동일한 위치에서 랜더링
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: theme.headerTintColor,
      }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
