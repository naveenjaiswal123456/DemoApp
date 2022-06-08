import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createNativeStackNavigator();

const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
}

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'} screenOptions={{ animationEnabled: false, headerShown:false }} detachInactiveScreens={false} >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
   
  );
}

export default AuthStack;
