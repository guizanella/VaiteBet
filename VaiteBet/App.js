import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/login';
import Tela from './src/tela';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tela" component={Tela} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }