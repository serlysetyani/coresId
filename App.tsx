import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';
import Colors from './constant/Colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false, title: '' }} />
        <Stack.Screen name="SignupScreen" component={Signup} options={{
          title: 'Sign up',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: '#f9f9f9'
          },
          headerTintColor: Colors.redBrick
        }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} options={{
          title: 'Lupa Password',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: '#f9f9f9'
          },
          headerTintColor: Colors.redBrick
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
