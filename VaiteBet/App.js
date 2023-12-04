import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/login';
import Cadastro from './src/cadastro';
import Inicio from './src/inicio';
import Jogos from './src/jogos';
import Saque from './src/saque';
import Deposito from './src/deposito';
import Historico from './src/historico';
import Apostar from './src/apostar';
import Controle from './src/controle';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Jogos" component={Jogos} />
        <Stack.Screen name="Saque" component={Saque} />
        <Stack.Screen name="Deposito" component={Deposito} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Apostar" component={Apostar} />
        <Stack.Screen name="Controle" component={Controle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}